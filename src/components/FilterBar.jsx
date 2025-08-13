import React from 'react';
import { FaFilter, FaTimes } from 'react-icons/fa';
import './FilterBar.css';

const FilterBar = ({ 
  filters, 
  onFilterChange, 
  categories, 
  discountTypes, 
  cities,
  onClearFilters 
}) => {
  const handleInputChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  const hasActiveFilters = filters.category || filters.type || filters.city;

  return (
    <div className="filter-bar">
      <div className="filter-header">
        <h3>Filter Offers</h3>
        {hasActiveFilters && (
          <button 
            className="clear-filters-btn"
            onClick={onClearFilters}
            aria-label="Clear all filters"
          >
            <FaTimes />
            Clear All
          </button>
        )}
      </div>

      <div className="filter-controls">
        {/* Filter Options */}
        <div className="filter-options">
          {/* Category Filter */}
          <div className="filter-group">
            <label htmlFor="category-filter">Category</label>
            <select
              id="category-filter"
              value={filters.category || ''}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="filter-select"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Discount Type Filter */}
          <div className="filter-group">
            <label htmlFor="type-filter">Discount Type</label>
            <select
              id="type-filter"
              value={filters.type || ''}
              onChange={(e) => handleInputChange('type', e.target.value)}
              className="filter-select"
            >
              <option value="">All Types</option>
              {discountTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* City Filter */}
          <div className="filter-group">
            <label htmlFor="city-filter">City</label>
            <select
              id="city-filter"
              value={filters.city || ''}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="filter-select"
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="active-filters">
            <span className="active-filters-label">Active filters:</span>
            {filters.category && (
              <span className="filter-tag">
                Category: {filters.category}
                <button 
                  onClick={() => handleInputChange('category', '')}
                  className="remove-filter-btn"
                  aria-label="Remove category filter"
                >
                  <FaTimes />
                </button>
              </span>
            )}
            {filters.type && (
              <span className="filter-tag">
                Type: {filters.type}
                <button 
                  onClick={() => handleInputChange('type', '')}
                  className="remove-filter-btn"
                  aria-label="Remove type filter"
                >
                  <FaTimes />
                </button>
              </span>
            )}
            {filters.city && (
              <span className="filter-tag">
                City: {filters.city}
                <button 
                  onClick={() => handleInputChange('city', '')}
                  className="remove-filter-btn"
                  aria-label="Remove city filter"
                >
                  <FaTimes />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
