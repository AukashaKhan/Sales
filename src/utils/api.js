import axios from 'axios';

// BestSheet API configuration
// Replace with your actual BestSheet API endpoint
const BESTSHEET_API_URL = 'https://api.bestsheet.com/v1/your-sheet-id';

// Fallback mock data for development/testing
const MOCK_DISCOUNTS = [
  {
    id: 1,
    title: "50% off at Pizza Hut",
    description: "Valid until August 31, 2024. Use code PIZZA50 at checkout.",
    latitude: 28.6139,
    longitude: 77.2090,
    category: "Food",
    discount_type: "Credit Card",
    source_link: "https://pizzahut.com/offers",
    city: "Delhi"
  },
  {
    id: 2,
    title: "30% off on Electronics",
    description: "Get 30% off on all electronics at Best Buy. Limited time offer.",
    latitude: 28.6139,
    longitude: 77.2090,
    category: "Electronics",
    discount_type: "Special Offer",
    source_link: "https://bestbuy.com/deals",
    city: "Delhi"
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free on Coffee",
    description: "Valid at Starbucks locations. Show this offer at counter.",
    latitude: 19.0760,
    longitude: 72.8777,
    category: "Food",
    discount_type: "Promotion",
    source_link: "https://starbucks.com/offers",
    city: "Mumbai"
  },
  {
    id: 4,
    title: "20% off on Clothing",
    description: "End of season sale at H&M. Valid on all clothing items.",
    latitude: 12.9716,
    longitude: 77.5946,
    category: "Clothing",
    discount_type: "Sale",
    source_link: "https://hm.com/sale",
    city: "Bangalore"
  },
  {
    id: 5,
    title: "Free Delivery on Orders Above ₹500",
    description: "Valid on all restaurants. Use code FREEDEL at checkout.",
    latitude: 22.5726,
    longitude: 88.3639,
    category: "Food",
    discount_type: "Delivery",
    source_link: "https://swiggy.com/offers",
    city: "Kolkata"
  },
  {
    id: 6,
    title: "15% off on Movie Tickets",
    description: "Valid on all movies. Book through our app for best prices.",
    latitude: 17.3850,
    longitude: 78.4867,
    category: "Entertainment",
    discount_type: "Credit Card",
    source_link: "https://bookmyshow.com/offers",
    city: "Hyderabad"
  },
  {
    id: 7,
    title: "25% off on Gym Memberships",
    description: "New member special. Valid for first 3 months.",
    latitude: 26.8467,
    longitude: 80.9462,
    category: "Health",
    discount_type: "Membership",
    source_link: "https://fitnessfirst.com/offers",
    city: "Lucknow"
  },
  {
    id: 8,
    title: "10% off on Groceries",
    description: "Valid on all grocery items. Use your loyalty card.",
    latitude: 23.0225,
    longitude: 72.5714,
    category: "Grocery",
    discount_type: "Loyalty",
    source_link: "https://bigbasket.com/offers",
    city: "Ahmedabad"
  }
];

/**
 * Fetch discounts from BestSheet API
 * @returns {Promise<Array>} Array of discount objects
 */
export const fetchDiscounts = async () => {
  try {
    // Try to fetch from BestSheet API first
    if (BESTSHEET_API_URL !== 'https://api.bestsheet.com/v1/your-sheet-id') {
      const response = await axios.get(BESTSHEET_API_URL);
      
      if (response.data && Array.isArray(response.data)) {
        return response.data;
      }
    }
    
    // Fallback to mock data for development
    console.log('Using mock data for development. Replace BESTSHEET_API_URL with your actual endpoint.');
    return MOCK_DISCOUNTS;
    
  } catch (error) {
    console.error('Error fetching discounts:', error);
    
    // Return mock data as fallback
    console.log('Falling back to mock data due to API error.');
    return MOCK_DISCOUNTS;
  }
};

/**
 * Fetch discounts with error handling and loading states
 * @param {Function} setLoading - Function to set loading state
 * @param {Function} setError - Function to set error state
 * @returns {Promise<Array>} Array of discount objects
 */
export const fetchDiscountsWithState = async (setLoading, setError) => {
  setLoading(true);
  setError(null);
  
  try {
    const discounts = await fetchDiscounts();
    setLoading(false);
    return discounts;
  } catch (error) {
    setError(error.message || 'Failed to fetch discounts');
    setLoading(false);
    return [];
  }
};

/**
 * Add a new discount to the sheet (if API supports it)
 * @param {Object} discount - Discount object to add
 * @returns {Promise<Object>} Response from API
 */
export const addDiscount = async (discount) => {
  try {
    if (BESTSHEET_API_URL !== 'https://api.bestsheet.com/v1/your-sheet-id') {
      const response = await axios.post(BESTSHEET_API_URL, discount);
      return response.data;
    } else {
      throw new Error('API endpoint not configured');
    }
  } catch (error) {
    console.error('Error adding discount:', error);
    throw error;
  }
};

/**
 * Update an existing discount
 * @param {number} id - Discount ID
 * @param {Object} discount - Updated discount object
 * @returns {Promise<Object>} Response from API
 */
export const updateDiscount = async (id, discount) => {
  try {
    if (BESTSHEET_API_URL !== 'https://api.bestsheet.com/v1/your-sheet-id') {
      const response = await axios.put(`${BESTSHEET_API_URL}/${id}`, discount);
      return response.data;
    } else {
      throw new Error('API endpoint not configured');
    }
  } catch (error) {
    console.error('Error updating discount:', error);
    throw error;
  }
};

/**
 * Delete a discount
 * @param {number} id - Discount ID to delete
 * @returns {Promise<Object>} Response from API
 */
export const deleteDiscount = async (id) => {
  try {
    if (BESTSHEET_API_URL !== 'https://api.bestsheet.com/v1/your-sheet-id') {
      const response = await axios.delete(`${BESTSHEET_API_URL}/${id}`);
      return response.data;
    } else {
      throw new Error('API endpoint not configured');
    }
  } catch (error) {
    console.error('Error deleting discount:', error);
    throw error;
  }
};

/**
 * Get API configuration info
 * @returns {Object} API configuration
 */
export const getApiConfig = () => {
  return {
    isConfigured: BESTSHEET_API_URL !== 'https://api.bestsheet.com/v1/your-sheet-id',
    endpoint: BESTSHEET_API_URL,
    usingMockData: BESTSHEET_API_URL === 'https://api.bestsheet.com/v1/your-sheet-id'
  };
}; 