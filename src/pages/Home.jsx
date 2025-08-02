import { useState, useEffect } from 'react';
import LocationBanner from '../components/LocationBanner';
import FilterBar from '../components/FilterBar';
import DiscountCard from '../components/DiscountCard';
import { fetchDiscountsWithState } from '../utils/api';
import { applyFilters, getUniqueCategories, getUniqueDiscountTypes } from '../utils/geolocation';


const Home = () => {
  const [discounts, setDiscounts] = useState([]);
  const [filteredDiscounts, setFilteredDiscounts] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    discountType: ''
  });

  // Fetch discounts on component mount
  useEffect(() => {
    const loadDiscounts = async () => {
      try {
        const data = await fetchDiscountsWithState(setLoading, setError);
        setDiscounts(data);
        setFilteredDiscounts(data);
      } catch (err) {
        setError('Failed to load discounts');
      }
    };

    loadDiscounts();
  }, []);

  // Apply filters when discounts or filters change
  useEffect(() => {
    const filtered = applyFilters(discounts, filters, userLocation);
    setFilteredDiscounts(filtered);
  }, [discounts, filters, userLocation]);

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

  const categories = getUniqueCategories(discounts);
  const discountTypes = getUniqueDiscountTypes(discounts);

  if (loading) {
    return (
      <div className="main">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
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
          onSearchChange={handleSearchChange}
        />

        {filteredDiscounts.length > 0 ? (
          <div className="discounts-grid">
            {filteredDiscounts.map(discount => (
              <DiscountCard
                key={discount.id}
                discount={discount}
                userLocation={userLocation}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="success-message">
              {filters.search || filters.category || filters.discountType
                ? 'No discounts found matching your filters. Try adjusting your search criteria.'
                : 'No discounts available in your area. Check back later for new deals!'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home; 
