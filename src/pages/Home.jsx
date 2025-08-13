import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationBanner from '../components/LocationBanner';
import FilterBar from '../components/FilterBar';
import DiscountCard from '../components/DiscountCard';
import { 
  discountOffers, 
  getCategories, 
  getDiscountTypes, 
  getCities, 
  filterOffers, 
  sortOffers 
} from '../data/discounts';
import './Home.css';

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    type: '',
    city: ''
  });
  const [sortBy, setSortBy] = useState('expiry');

  const navigate = useNavigate();

  // Load offers on component mount
  useEffect(() => {
    const loadOffers = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
        setOffers(discountOffers);
        setFilteredOffers(discountOffers);
        setLoading(false);
      } catch (err) {
        setError('Failed to load offers');
        setLoading(false);
      }
    };

    loadOffers();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    const filtered = filterOffers(offers, filters);
    const sorted = sortOffers(filtered, sortBy);
    setFilteredOffers(sorted);
  }, [offers, filters, sortBy]);

  const handleLocationUpdate = (location) => {
    setUserLocation(location);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSearchChange = (searchTerm) => {
    setFilters(prev => ({
      ...prev,
      search: searchTerm
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      category: '',
      type: '',
      city: ''
    });
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  // Navigate to DiscountPage instead of opening modal
  const handleCardClick = (offer) => {
    navigate(`/discount/${offer.id}`);
  };

  const handleSaveToggle = (offerId, isSaved) => {
    console.log(`Offer ${offerId} ${isSaved ? 'saved' : 'unsaved'}`);
  };

  const categories = getCategories();
  const discountTypes = getDiscountTypes();
  const cities = getCities();

  if (loading) {
    return (
      <div className="main">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading amazing offers...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main">
        <div className="container">
          <div className="error-message">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="container">
        <LocationBanner onLocationUpdate={handleLocationUpdate} />

        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          categories={categories}
          discountTypes={discountTypes}
          cities={cities}
          onSearchChange={handleSearchChange}
          onClearFilters={handleClearFilters}
        />

        <div className="sort-section">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="sort-select"
          >
            <option value="expiry">Expiry Date</option>
            <option value="discount">Discount %</option>
            <option value="title">Title</option>
            <option value="category">Category</option>
          </select>
        </div>

        <div className="results-info">
          <p>
            Showing {filteredOffers.length} of {offers.length} offers
            {filters.search && ` for "${filters.search}"`}
          </p>
        </div>

        {filteredOffers.length > 0 ? (
          <div className="offers-grid">
            {filteredOffers.map(offer => (
              <DiscountCard
                key={offer.id}
                offer={offer}
                userLocation={userLocation}
                onCardClick={handleCardClick}
                onSaveToggle={handleSaveToggle}
                showSaveButton={true}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-content">
              <h3>No offers found</h3>
              <p>
                {filters.search || filters.category || filters.type || filters.city
                  ? 'Try adjusting your filters or search terms to find more offers.'
                  : 'No offers are currently available. Check back later for new deals!'}
              </p>
              {(filters.search || filters.category || filters.type || filters.city) && (
                <button 
                  className="clear-filters-btn"
                  onClick={handleClearFilters}
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
