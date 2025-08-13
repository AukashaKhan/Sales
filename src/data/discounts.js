// Discount offers data structure
export const discountOffers = [
  {
    id: 1,
    title: "50% off at Pizza Hut",
    description: "Valid until August 31, 2025. Use code PIZZA50 at checkout. Perfect for family dinners and group orders. Cannot be combined with other offers.",
    category: "Food",
    expiry: "2025-08-31T23:59:59",
    image: "/images/Center_Image.jpeg",
    location: {
      name: "Pizza Hut - Connaught Place",
      address: "Connaught Place, New Delhi, Delhi 110001",
      latitude: 28.6139,
      longitude: 77.2090,
      city: "Delhi"
    },
    type: "percentage",
    discountPercent: 50,
    link: "https://pizzahut.com/offers",
    tags: ["pizza", "restaurant", "family"]
  },
  {
    id: 2,
    title: "30% off on Electronics",
    description: "Get 30% off on all electronics at Best Buy. Limited time offer on smartphones, laptops, and accessories. Valid on select brands only.",
    category: "Electronics",
    expiry: "2025-09-15T23:59:59",
    image: "/images/Center_Image.jpeg",
    location: {
      name: "Best Buy - Delhi",
      address: "Saket, New Delhi, Delhi 110017",
      latitude: 28.6139,
      longitude: 77.2090,
      city: "Delhi"
    },
    type: "percentage",
    discountPercent: 30,
    link: "https://bestbuy.com/deals",
    tags: ["electronics", "smartphones", "laptops"]
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free on Coffee",
    description: "Valid at Starbucks locations. Show this offer at counter. Perfect for coffee lovers. Valid on all coffee beverages including seasonal drinks.",
    category: "Food",
    expiry: "2025-10-01T23:59:59",
    image: "/images/Center_Image.jpeg",
    location: {
      name: "Starbucks - Bandra West",
      address: "Bandra West, Mumbai, Maharashtra 400050",
      latitude: 19.0760,
      longitude: 72.8777,
      city: "Mumbai"
    },
    type: "bogo",
    discountPercent: 100,
    link: "https://starbucks.com/offers",
    tags: ["coffee", "beverages", "cafe"]
  },
  {
    id: 4,
    title: "20% off on Clothing",
    description: "End of season sale at H&M. Valid on all clothing items including dresses, tops, and accessories. Limited stock available.",
    category: "Fashion",
    expiry: "2025-09-30T23:59:59",
    image: "/images/Center_Image.jpeg",
    location: {
      name: "H&M - Phoenix MarketCity",
      address: "Phoenix MarketCity, Whitefield, Bangalore 560066",
      latitude: 12.9716,
      longitude: 77.5946,
      city: "Bangalore"
    },
    type: "percentage",
    discountPercent: 20,
    link: "https://hm.com/sale",
    tags: ["clothing", "fashion", "sale"]
  },
  {
    id: 5,
    title: "Free Delivery on Orders Above ₹500",
    description: "Valid on all restaurants. Use code FREEDEL at checkout. No minimum order value for premium members. Valid across all cities.",
    category: "Food",
    expiry: "2025-12-31T23:59:59",
    image: "/images/Center_Image.jpeg",
    location: {
      name: "Swiggy - Kolkata",
      address: "Park Street, Kolkata, West Bengal 700016",
      latitude: 22.5726,
      longitude: 88.3639,
      city: "Kolkata"
    },
    type: "delivery",
    discountPercent: 0,
    link: "https://swiggy.com/offers",
    tags: ["delivery", "food", "online"]
  },
  {
    id: 6,
    title: "15% off on Movie Tickets",
    description: "Valid on all movies. Book through our app for best prices. Includes premium formats like IMAX and 4DX. Valid for all show timings.",
    category: "Entertainment",
    expiry: "2025-11-30T23:59:59",
    image: "/images/Center_Image.jpeg",
    location: {
      name: "PVR Cinemas - Hyderabad",
      address: "Banjara Hills, Hyderabad, Telangana 500034",
      latitude: 17.3850,
      longitude: 78.4867,
      city: "Hyderabad"
    },
    type: "percentage",
    discountPercent: 15,
    link: "https://bookmyshow.com/offers",
    tags: ["movies", "entertainment", "cinema"]
  },
  {
    id: 7,
    title: "25% off on Gym Memberships",
    description: "New member special. Valid for first 3 months. Includes access to all facilities, group classes, and personal training sessions.",
    category: "Health",
    expiry: "2025-10-31T23:59:59",
    image: "/images/Center_Image.jpeg",
    location: {
      name: "Fitness First - Lucknow",
      address: "Gomti Nagar, Lucknow, Uttar Pradesh 226010",
      latitude: 26.8467,
      longitude: 80.9462,
      city: "Lucknow"
    },
    type: "percentage",
    discountPercent: 25,
    link: "https://fitnessfirst.com/offers",
    tags: ["gym", "fitness", "health"]
  },
  {
    id: 8,
    title: "10% off on Groceries",
    description: "Valid on all grocery items. Use your loyalty card. Includes fresh produce, dairy, and packaged goods. Valid on minimum purchase of ₹1000.",
    category: "Grocery",
    expiry: "2025-12-31T23:59:59",
    image: "/images/Center_Image.jpeg",
    location: {
      name: "BigBasket - Ahmedabad",
      address: "Satellite, Ahmedabad, Gujarat 380015",
      latitude: 23.0225,
      longitude: 72.5714,
      city: "Ahmedabad"
    },
    type: "percentage",
    discountPercent: 10,
    link: "https://bigbasket.com/offers",
    tags: ["grocery", "fresh", "daily"]
  }
];

// Helper functions for data manipulation
export const getCategories = () => {
  const categories = [...new Set(discountOffers.map(offer => offer.category))];
  return categories.sort();
};

export const getDiscountTypes = () => {
  const types = [...new Set(discountOffers.map(offer => offer.type))];
  return types.sort();
};

export const getCities = () => {
  const cities = [...new Set(discountOffers.map(offer => offer.location.city))];
  return cities.sort();
};

export const filterOffers = (offers, filters) => {
  return offers.filter(offer => {
    // Search filter
    if (filters.search && !offer.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !offer.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (filters.category && offer.category !== filters.category) {
      return false;
    }
    
    // Type filter
    if (filters.type && offer.type !== filters.type) {
      return false;
    }
    
    // City filter
    if (filters.city && offer.location.city !== filters.city) {
      return false;
    }
    
    return true;
  });
};

export const sortOffers = (offers, sortBy = 'expiry') => {
  const sortedOffers = [...offers];
  
  switch (sortBy) {
    case 'expiry':
      return sortedOffers.sort((a, b) => new Date(a.expiry) - new Date(b.expiry));
    case 'discount':
      return sortedOffers.sort((a, b) => b.discountPercent - a.discountPercent);
    case 'title':
      return sortedOffers.sort((a, b) => a.title.localeCompare(b.title));
    case 'category':
      return sortedOffers.sort((a, b) => a.category.localeCompare(b.category));
    default:
      return sortedOffers;
  }
};
