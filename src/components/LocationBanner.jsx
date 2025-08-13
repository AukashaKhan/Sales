import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaLocationArrow, FaExclamationTriangle } from 'react-icons/fa';
import { getCurrentLocation, getLocationName } from '../utils/geolocation';

const LocationBanner = ({ onLocationUpdate }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getLocation = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const coords = await getCurrentLocation();
      const locationName = await getLocationName(coords.latitude, coords.longitude);
      
      const locationData = {
        ...coords,
        name: locationName
      };
      
      setLocation(locationData);
      onLocationUpdate(locationData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (loading) {
    return (
      <div className="location-banner">
        <div className="location-content">
          <div className="location-icon">
            <FaLocationArrow />
          </div>
          <div className="location-text">
            Getting your location...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="location-banner">
        <div className="location-content">
          <div className="location-icon">
            <FaExclamationTriangle />
          </div>
          <div className="location-text">
            Unable to get your location
          </div>
          <div className="error-message">
            {error}
          </div>
          <button 
            className="location-button" 
            onClick={getLocation}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (location) {
    return (
      <div className="location-banner">
        <div className="location-content">
          <div className="location-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="location-text">
            <strong>📍 Your :</strong> {location.name || `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`}
          </div>
          <button 
            className="location-button" 
            onClick={getLocation}
          >
            <FaLocationArrow style={{ marginRight: '8px' }} />
            Refresh Location
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="location-banner">
      <div className="location-content">
        <div className="location-icon">
          <FaMapMarkerAlt />
        </div>
        <div className="location-text">
          Click below to get your location and find nearby discounts
        </div>
        <button 
          className="location-button" 
          onClick={getLocation}
        >
          <FaLocationArrow style={{ marginRight: '8px' }} />
          Get My Location
        </button>
      </div>
    </div>
  );
};

export default LocationBanner; 