import React from 'react';
import { 
  getCategoryIcon, 
  getDiscountTypeIcon, 
  formatDiscount, 
  formatDistance, 
  calculateDistance,
  isExpired,
  expiresSoon,
  isOfferSaved
} from '../utils/helpers';
import { saveOffer, removeSavedOffer } from '../utils/helpers';
import './DiscountCard.css';

const DiscountCard = ({ 
  offer, 
  userLocation, 
  onCardClick, 
  onSaveToggle,
  showSaveButton = true 
}) => {
  // Calculate distance if user location is available
  const distance = userLocation && offer.location 
    ? calculateDistance(
        userLocation.latitude, 
        userLocation.longitude, 
        offer.location.latitude, 
        offer.location.longitude
      )
    : null;

  // Check offer status
  const expired = isExpired(offer.expiry);
  const expiringSoon = expiresSoon(offer.expiry);
  const isSaved = isOfferSaved(offer.id);

  // Handle save/unsave offer
  const handleSaveToggle = (e) => {
    e.stopPropagation(); // Prevent card click
    if (isSaved) {
      removeSavedOffer(offer.id);
    } else {
      saveOffer(offer);
    }
    if (onSaveToggle) {
      onSaveToggle(offer.id, !isSaved);
    }
  };

  // Handle card click
  const handleCardClick = () => {
    if (onCardClick && !expired) {
      onCardClick(offer);
    }
  };

  // Don't render expired offers
  if (expired) {
    return null;
  }

  return (
    <div 
      className={`discount-card ${expiringSoon ? 'expiring-soon' : ''}`}
      onClick={handleCardClick}
    >
      {/* Offer Image */}
      <div className="card-image-container">
        <img 
          src={offer.image} 
          alt={offer.title}
          className="card-image"
        />
        {expiringSoon && (
          <div className="expiring-badge">
            Expires Soon!
          </div>
        )}
        {showSaveButton && (
          <button 
            className={`save-button ${isSaved ? 'saved' : ''}`}
            onClick={handleSaveToggle}
            aria-label={isSaved ? 'Remove from saved' : 'Save offer'}
          >
            {isSaved ? '❤️' : '🤍'}
          </button>
        )}
      </div>

      {/* Card Content */}
      <div className="card-content">
        {/* Header */}
        <div className="card-header">
          <div className="card-title">
            {getCategoryIcon(offer.category)} {offer.title}
          </div>
          <div className="card-category">
            {offer.category}
          </div>
        </div>
        
        {/* Description */}
        <div className="card-description">
          {offer.description}
        </div>
        
        {/* Details */}
        <div className="card-details">
          {distance && (
            <div className="distance">
              📍 {formatDistance(distance)}
            </div>
          )}
          <div className="discount-type">
            {getDiscountTypeIcon(offer.type)} {formatDiscount(offer.discountPercent, offer.type)}
          </div>
        </div>

        {/* Expiry Info */}
        <div className="card-expiry">
          <span className="expiry-label">Valid until:</span>
          <span className="expiry-date">{new Date(offer.expiry).toLocaleDateString()}</span>
        </div>
        
        {/* Actions */}
        <div className="card-actions">
          <button className="action-button primary">
            View Details
          </button>
          {offer.link && (
            <a 
              href={offer.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-button secondary"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscountCard; 