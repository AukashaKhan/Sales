import React, { useState, useEffect } from 'react';
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
  showSaveButton = true,
  isLoading = false 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageAttempted, setImageAttempted] = useState(false);

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

  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageAttempted(true);
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
    setImageAttempted(true);
  };

  // Get category-based fallback image
  const getCategoryFallbackImage = (category) => {
    const fallbackImages = {
      'Food': '🍕',
      'Electronics': '📱',
      'Fashion': '👗',
      'Entertainment': '🎬',
      'Health': '💪',
      'Grocery': '🛒',
      'Beauty': '💄',
      'Fitness': '🏋️'
    };
    return fallbackImages[category] || '🎯';
  };

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

  // Loading state
  if (isLoading) {
    return (
      <div className="discount-card loading">
        <div className="card-image-container">
          <div className="card-image" style={{ background: '#f0f0f0' }} />
        </div>
        <div className="card-content">
          <div style={{ height: '20px', background: '#e0e0e0', borderRadius: '4px', marginBottom: '12px' }} />
          <div style={{ height: '16px', background: '#e0e0e0', borderRadius: '4px', marginBottom: '12px', width: '70%' }} />
          <div style={{ height: '40px', background: '#e0e0e0', borderRadius: '4px' }} />
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`discount-card ${expiringSoon ? 'expiring-soon' : ''}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
      aria-label={`${offer.title} - ${offer.category} offer`}
    >
      {/* Offer Image */}
      <div className="card-image-container">
        {!imageError ? (
          <img 
            src={offer.image} 
            alt={offer.title}
            className="card-image"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        ) : (
          <div className={`card-image-fallback ${offer.category.toLowerCase()}-category`}>
            {getCategoryIcon(offer.category)}
          </div>
        )}
        
        {/* Loading overlay for image */}
        {!imageLoaded && !imageError && (
          <div 
            className="card-image card-image-loading"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: 'imageLoading 1.5s infinite'
            }}
          />
        )}
        
        {expiringSoon && (
          <div className="expiring-badge">
            ⚡ Expires Soon!
          </div>
        )}
        
        {showSaveButton && (
          <button 
            className={`save-button ${isSaved ? 'saved' : ''}`}
            onClick={handleSaveToggle}
            aria-label={isSaved ? 'Remove from saved' : 'Save offer'}
            title={isSaved ? 'Remove from saved' : 'Save offer'}
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
            <span className="title-icon">{getCategoryIcon(offer.category)}</span>
            <span className="title-text">{offer.title}</span>
          </div>
          <div className="card-category">
            {offer.category}
          </div>
        </div>
        
        {/* Description */}
        {offer.description && (
          <div className="card-description">
            {offer.description}
          </div>
        )}
        
        {/* Details */}
        <div className="card-details">
          {distance && (
            <div className="distance">
              <span>📍</span>
              <span>{formatDistance(distance)}</span>
            </div>
          )}
          <div className="discount-type">
            <span>{getDiscountTypeIcon(offer.type)}</span>
            <span>{formatDiscount(offer.discountPercent, offer.type)}</span>
          </div>
        </div>

        {/* Expiry Info */}
        <div className="card-expiry">
          <span className="expiry-label">Valid until</span>
          <span className="expiry-date">
            {new Date(offer.expiry).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>
        
        {/* Actions */}
        <div className="card-actions">
          <button 
            className="action-button primary"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
          >
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