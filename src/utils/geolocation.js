// Utility functions for geolocation and distance calculations

/**
 * Get user's current location using browser geolocation API
 * @returns {Promise<{latitude: number, longitude: number}>}
 */
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject(new Error('Location access denied. Please enable location services to find nearby discounts.'));
            break;
          case error.POSITION_UNAVAILABLE:
            reject(new Error('Location information is unavailable.'));
            break;
          case error.TIMEOUT:
            reject(new Error('Location request timed out.'));
            break;
          default:
            reject(new Error('An unknown error occurred while getting location.'));
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  });
};

/**
 * Calculate distance between two points using Haversine formula
 * @param {number} lat1 - Latitude of first point
 * @param {number} lon1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lon2 - Longitude of second point
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c; // Distance in kilometers
  return distance;
};

/**
 * Filter discounts by location proximity
 * @param {Array} discounts - Array of discount objects
 * @param {number} userLat - User's latitude
 * @param {number} userLon - User's longitude
 * @param {number} maxDistance - Maximum distance in kilometers (default: 50)
 * @returns {Array} Filtered discounts within the specified radius
 */
export const filterByLocation = (discounts, userLocation, maxDistance = 50) => {
  if (!userLocation) return discounts;

  return discounts.filter(discount => {
    if (!discount.latitude || !discount.longitude) return false;
    
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      parseFloat(discount.latitude),
      parseFloat(discount.longitude)
    );
    
    return distance <= maxDistance;
  });
};

/**
 * Filter discounts by city name (fallback when geolocation is not available)
 * @param {Array} discounts - Array of discount objects
 * @param {string} cityName - City name to filter by
 * @returns {Array} Filtered discounts in the specified city
 */
export const filterByCity = (discounts, city) => {
  if (!city) return discounts;
  
  return discounts.filter(discount => 
    discount.city && 
    discount.city.toLowerCase().includes(city.toLowerCase())
  );
};

/**
 * Get unique categories from discounts array
 * @param {Array} discounts - Array of discount objects
 * @returns {Array} Array of unique category names
 */
export const getUniqueCategories = (discounts) => {
  const categories = [...new Set(discounts.map(d => d.category).filter(Boolean))];
  return categories.sort();
};

/**
 * Get unique discount types from discounts array
 * @param {Array} discounts - Array of discount objects
 * @returns {Array} Array of unique discount type names
 */
export const getUniqueDiscountTypes = (discounts) => {
  const types = [...new Set(discounts.map(d => d.discount_type).filter(Boolean))];
  return types.sort();
};

/**
 * Search discounts by title or description
 * @param {Array} discounts - Array of discount objects
 * @param {string} searchTerm - Search term
 * @returns {Array} Filtered discounts matching the search term
 */
export const searchDiscounts = (discounts, searchTerm) => {
  if (!searchTerm) return discounts;
  
  const term = searchTerm.toLowerCase();
  return discounts.filter(discount => 
    discount.title?.toLowerCase().includes(term) ||
    discount.description?.toLowerCase().includes(term) ||
    discount.city?.toLowerCase().includes(term)
  );
};

/**
 * Apply multiple filters to discounts
 * @param {Array} discounts - Array of discount objects
 * @param {Object} filters - Filter object with various filter criteria
 * @returns {Array} Filtered discounts
 */
export const applyFilters = (discounts, filters, userLocation) => {
  let filtered = [...discounts];

  // Apply search filter
  if (filters.search) {
    filtered = searchDiscounts(filtered, filters.search);
  }

  // Apply category filter
  if (filters.category) {
    filtered = filtered.filter(d => d.category === filters.category);
  }

  // Apply discount type filter
  if (filters.discountType) {
    filtered = filtered.filter(d => d.discount_type === filters.discountType);
  }

  // Apply location filter
  if (userLocation) {
    filtered = filterByLocation(filtered, userLocation);
  }

  return filtered;
};

/**
 * Format distance for display
 * @param {number} distance - Distance in kilometers
 * @returns {string} Formatted distance string
 */
export const formatDistance = (distance) => {
  if (distance < 1) {
    return `${Math.round(distance * 1000)}m away`;
  } else if (distance < 10) {
    return `${distance.toFixed(1)}km away`;
  } else {
    return `${Math.round(distance)}km away`;
  }
};

/**
 * Get location name from coordinates (reverse geocoding)
 * This is a placeholder - in a real app, you'd use a geocoding service
 * @param {number} latitude - Latitude
 * @param {number} longitude - Longitude
 * @returns {Promise<string>} Location name
 */
export const getLocationName = async (latitude, longitude) => {
  try {
    // In a real implementation, you would use a geocoding service like:
    // - Google Maps Geocoding API
    // - OpenStreetMap Nominatim
    // - MapBox Geocoding API
    
    // For now, return a placeholder
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    
    if (response.ok) {
      const data = await response.json();
      return data.locality || data.city || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
    }
  } catch (error) {
    console.log('Could not get location name:', error);
  }
  
  // Fallback to coordinates
  return `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
}; 