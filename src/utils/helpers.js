// Utility functions for the application

/**
 * Format date to readable string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Calculate time remaining until expiry
 * @param {string} expiryDate - ISO date string
 * @returns {object} Object with days, hours, minutes, seconds
 */
export const getTimeRemaining = (expiryDate) => {
  const now = new Date().getTime();
  const expiry = new Date(expiryDate).getTime();
  const difference = expiry - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, expired: false };
};

/**
 * Calculate distance between two coordinates
 * @param {number} lat1 - First latitude
 * @param {number} lon1 - First longitude
 * @param {number} lat2 - Second latitude
 * @param {number} lon2 - Second longitude
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

/**
 * Format distance for display
 * @param {number} distance - Distance in kilometers
 * @returns {string} Formatted distance string
 */
export const formatDistance = (distance) => {
  if (distance < 1) {
    return `${Math.round(distance * 1000)}m`;
  } else if (distance < 10) {
    return `${distance.toFixed(1)}km`;
  } else {
    return `${Math.round(distance)}km`;
  }
};

/**
 * Get category icon based on category name
 * @param {string} category - Category name
 * @returns {string} Emoji icon
 */
export const getCategoryIcon = (category) => {
  const iconMap = {
    'food': '🍕',
    'electronics': '📱',
    'fashion': '👗',
    'entertainment': '🎬',
    'health': '💊',
    'grocery': '🛒',
    'services': '🔧',
    'education': '📚',
    'travel': '✈️',
    'beauty': '💄',
    'sports': '⚽',
    'automotive': '🚗'
  };
  
  return iconMap[category.toLowerCase()] || '🏷️';
};

/**
 * Get discount type icon
 * @param {string} type - Discount type
 * @returns {string} Icon representation
 */
export const getDiscountTypeIcon = (type) => {
  const iconMap = {
    'percentage': '💯',
    'fixed': '💰',
    'bogo': '🎁',
    'delivery': '🚚',
    'membership': '🎫',
    'loyalty': '⭐'
  };
  
  return iconMap[type] || '🏷️';
};

/**
 * Format discount percentage for display
 * @param {number} percent - Discount percentage
 * @param {string} type - Discount type
 * @returns {string} Formatted discount string
 */
export const formatDiscount = (percent, type) => {
  switch (type) {
    case 'percentage':
      return `${percent}% OFF`;
    case 'fixed':
      return `₹${percent} OFF`;
    case 'bogo':
      return 'Buy 1 Get 1';
    case 'delivery':
      return 'Free Delivery';
    default:
      return `${percent}% OFF`;
  }
};

/**
 * Check if offer is expired
 * @param {string} expiryDate - ISO date string
 * @returns {boolean} True if expired
 */
export const isExpired = (expiryDate) => {
  return new Date(expiryDate) < new Date();
};

/**
 * Check if offer expires soon (within 7 days)
 * @param {string} expiryDate - ISO date string
 * @returns {boolean} True if expires soon
 */
export const expiresSoon = (expiryDate) => {
  const now = new Date();
  const expiry = new Date(expiryDate);
  const daysUntilExpiry = (expiry - now) / (1000 * 60 * 60 * 24);
  return daysUntilExpiry <= 7 && daysUntilExpiry > 0;
};

/**
 * Save offer to localStorage
 * @param {object} offer - Offer object to save
 */
export const saveOffer = (offer) => {
  try {
    const savedOffers = JSON.parse(localStorage.getItem('savedOffers') || '[]');
    if (!savedOffers.find(saved => saved.id === offer.id)) {
      savedOffers.push(offer);
      localStorage.setItem('savedOffers', JSON.stringify(savedOffers));
    }
  } catch (error) {
    console.error('Error saving offer:', error);
  }
};

/**
 * Remove offer from localStorage
 * @param {number} offerId - ID of offer to remove
 */
export const removeSavedOffer = (offerId) => {
  try {
    const savedOffers = JSON.parse(localStorage.getItem('savedOffers') || '[]');
    const filteredOffers = savedOffers.filter(offer => offer.id !== offerId);
    localStorage.setItem('savedOffers', JSON.stringify(filteredOffers));
  } catch (error) {
    console.error('Error removing offer:', error);
  }
};

/**
 * Check if offer is saved
 * @param {number} offerId - ID of offer to check
 * @returns {boolean} True if offer is saved
 */
export const isOfferSaved = (offerId) => {
  try {
    const savedOffers = JSON.parse(localStorage.getItem('savedOffers') || '[]');
    return savedOffers.some(offer => offer.id === offerId);
  } catch (error) {
    console.error('Error checking saved offer:', error);
    return false;
  }
};

/**
 * Get all saved offers
 * @returns {array} Array of saved offers
 */
export const getSavedOffers = () => {
  try {
    return JSON.parse(localStorage.getItem('savedOffers') || '[]');
  } catch (error) {
    console.error('Error getting saved offers:', error);
    return [];
  }
};

/**
 * Share offer via WhatsApp
 * @param {object} offer - Offer object to share
 */
export const shareViaWhatsApp = (offer) => {
  const text = `Check out this amazing offer: ${offer.title} - ${offer.description}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};

/**
 * Share offer via Email
 * @param {object} offer - Offer object to share
 */
export const shareViaEmail = (offer) => {
  const subject = `Amazing Offer: ${offer.title}`;
  const body = `Hi! I found this great offer:\n\n${offer.title}\n${offer.description}\n\nCheck it out: ${offer.link}`;
  const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(url);
};

/**
 * Copy offer link to clipboard
 * @param {string} link - Link to copy
 */
export const copyToClipboard = async (link) => {
  try {
    await navigator.clipboard.writeText(link);
    return true;
  } catch (error) {
    console.error('Error copying to clipboard:', error);
    return false;
  }
};
