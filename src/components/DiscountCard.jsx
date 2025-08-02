import { FaMapMarkerAlt, FaExternalLinkAlt, FaTag, FaCreditCard } from 'react-icons/fa';
import { calculateDistance, formatDistance } from '../utils/geolocation';

const DiscountCard = ({ discount, userLocation }) => {
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'food':
        return '🍕';
      case 'shopping':
        return '🛍️';
      case 'entertainment':
        return '🎬';
      case 'services':
        return '🔧';
      case 'health':
        return '💊';
      case 'education':
        return '📚';
      default:
        return '🏷️';
    }
  };

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'percentage':
        return <FaTag />;
      case 'fixed':
        return <FaCreditCard />;
      case 'buy one get one':
        return '🎁';
      default:
        return <FaTag />;
    }
  };

  const distance = userLocation 
    ? calculateDistance(
        userLocation.latitude, 
        userLocation.longitude, 
        discount.latitude, 
        discount.longitude
      )
    : null;

  return (
    <div className="discount-card">
      <div className="card-header">
        <div>
          <div className="card-title">
            {getCategoryIcon(discount.category)} {discount.title}
          </div>
        </div>
        <div className="card-category">
          {discount.category}
        </div>
      </div>
      
      <div className="card-description">
        {discount.description}
      </div>
      
      <div className="card-details">
        {distance && (
          <div className="distance">
            <FaMapMarkerAlt />
            {formatDistance(distance)}
          </div>
        )}
        <div className="discount-type">
          {getTypeIcon(discount.discount_type)} {discount.discount_type}
        </div>
      </div>
      
      <div className="card-actions">
        {discount.source_link && (
          <a 
            href={discount.source_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="action-button primary"
          >
            <FaExternalLinkAlt />
            View Deal
          </a>
        )}
        <button className="action-button secondary">
          <FaMapMarkerAlt />
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default DiscountCard; 