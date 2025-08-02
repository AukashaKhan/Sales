import { FaSearch, FaFilter } from 'react-icons/fa';

const FilterBar = ({ filters, onFilterChange, categories, discountTypes, onSearchChange }) => {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleCategoryChange = (e) => {
    onFilterChange('category', e.target.value);
  };

  const handleTypeChange = (e) => {
    onFilterChange('discountType', e.target.value);
  };

  return (
    <div className="filter-bar">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search discounts..."
          value={filters.search}
          onChange={handleSearchChange}
        />
      </div>
      
      <select
        value={filters.category}
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      
      <select
        value={filters.discountType}
        onChange={handleTypeChange}
      >
        <option value="">All Types</option>
        {discountTypes.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar; 