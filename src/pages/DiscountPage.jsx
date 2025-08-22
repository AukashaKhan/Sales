import React, { useState } from "react";
import "../pages/DiscountPage.css";
import { ImageUrl } from "../utils/Functions";
import DiscountCard from "../components/DiscountCard";

const DiscountPage = () => {
  const allDiscounts = [
    { 
      id: 1, 
      title: "20% Off at Burger Hub", 
      description: "Enjoy a delicious burger meal with 20% off all combos.", 
      type: "percentage", 
      category: "Food", 
      discountPercent: 20, 
      image: ImageUrl("food-discount.jpg"),
      expiry: "2025-12-31T23:59:59",
      location: {
        name: "Burger Hub",
        address: "Main Street, City Center",
        latitude: 28.6139,
        longitude: 77.2090,
        city: "Delhi"
      },
      link: "https://burgerhub.com/offers",
      tags: ["burger", "food", "combo"]
    },
    { 
      id: 2, 
      title: "Buy 1 Get 1 Free - Pizza Corner", 
      description: "Order a pizza and get the second one free on weekends.", 
      type: "bogo", 
      category: "Food", 
      discountPercent: 50, 
      image: ImageUrl("food-discount.jpg"),
      expiry: "2025-12-31T23:59:59",
      location: {
        name: "Pizza Corner",
        address: "Food Street, Downtown",
        latitude: 28.6139,
        longitude: 77.2090,
        city: "Delhi"
      },
      link: "https://pizzacorner.com/offers",
      tags: ["pizza", "food", "weekend"]
    },
    { 
      id: 3, 
      title: "15% Off at Coffee Bliss", 
      description: "Start your day right with 15% off all coffees.", 
      type: "percentage", 
      category: "Food", 
      discountPercent: 15, 
      image: ImageUrl("food-discount.jpg"),
      expiry: "2025-12-31T23:59:59",
      location: {
        name: "Coffee Bliss",
        address: "Cafe Street, Business District",
        latitude: 28.6139,
        longitude: 77.2090,
        city: "Delhi"
      },
      link: "https://coffeebliss.com/offers",
      tags: ["coffee", "drinks", "morning"]
    },
    { 
      id: 4, 
      title: "10% Off Desserts", 
      description: "Sweeten your day with 10% off all desserts.", 
      type: "percentage", 
      category: "Food", 
      discountPercent: 10, 
      image: ImageUrl("food-discount.jpg"),
      expiry: "2025-12-31T23:59:59",
      location: {
        name: "Sweet Treats",
        address: "Dessert Lane, Sugar Valley",
        latitude: 28.6139,
        longitude: 77.2090,
        city: "Delhi"
      },
      link: "https://sweettreats.com/offers",
      tags: ["dessert", "sweets", "treats"]
    },
    { 
      id: 5, 
      title: "30% Off Latest Smartphones", 
      description: "Get the latest smartphones with amazing discounts on flagship models.", 
      type: "percentage", 
      category: "Electronics", 
      discountPercent: 30, 
      image: ImageUrl("electronics-discount.jpg"),
      expiry: "2025-11-30T23:59:59",
      location: {
        name: "Tech Store",
        address: "Electronics Mall, Tech District",
        latitude: 28.6139,
        longitude: 77.2090,
        city: "Delhi"
      },
      link: "https://techstore.com/offers",
      tags: ["smartphone", "electronics", "tech"]
    },
    { 
      id: 6, 
      title: "25% Off Designer Clothing", 
      description: "Upgrade your wardrobe with premium designer wear at discounted prices.", 
      type: "percentage", 
      category: "Fashion", 
      discountPercent: 25, 
      image: ImageUrl("fashion-discount.jpg"),
      expiry: "2025-10-31T23:59:59",
      location: {
        name: "Fashion Plaza",
        address: "Style Street, Fashion District",
        latitude: 28.6139,
        longitude: 77.2090,
        city: "Delhi"
      },
      link: "https://fashionplaza.com/offers",
      tags: ["fashion", "designer", "clothing"]
    },
    { 
      id: 7, 
      title: "Movie Tickets - 2 for 1", 
      description: "Enjoy the latest blockbusters with buy one get one free movie tickets.", 
      type: "bogo", 
      category: "Entertainment", 
      discountPercent: 50, 
      image: ImageUrl("entertainment-discount.jpg"),
      expiry: "2025-12-15T23:59:59",
      location: {
        name: "Cinema Complex",
        address: "Entertainment Hub, Movie District",
        latitude: 28.6139,
        longitude: 77.2090,
        city: "Delhi"
      },
      link: "https://cinemacomplex.com/offers",
      tags: ["movies", "entertainment", "cinema"]
    },
    { 
      id: 8, 
      title: "Gym Membership - 40% Off", 
      description: "Start your fitness journey with exclusive discounts on annual memberships.", 
      type: "percentage", 
      category: "Health", 
      discountPercent: 40, 
      image: ImageUrl("health-discount.jpg"),
      expiry: "2025-09-30T23:59:59",
      location: {
        name: "FitLife Gym",
        address: "Fitness Center, Health District",
        latitude: 28.6139,
        longitude: 77.2090,
        city: "Delhi"
      },
      link: "https://fitlifegym.com/offers",
      tags: ["fitness", "gym", "health"]
    },
  ];

  const [typeFilter, setTypeFilter] = useState("");
  const [percentageFilter, setPercentageFilter] = useState("");

  const filteredDiscounts = allDiscounts.filter((offer) => {
    const typeMatch = typeFilter ? offer.category.toLowerCase() === typeFilter : true;
    const percentageMatch = percentageFilter
      ? offer.discountPercent >= parseInt(percentageFilter)
      : true;
    return typeMatch && percentageMatch;
  });

  return (
    <div className="discount-page">
      {/* Banner Section */}
      <div className="discount-banner">
        <img src={ImageUrl("Center_Image.jpeg")} alt="Discounts Banner" />
        <div className="banner-overlay">
          <h1>Exclusive Discounts</h1>
          <p>Get the best deals from your favorite spots</p>
        </div>
      </div>

      {/* Filter Bar on the Right Side */}
      <div className="filter-bar-right">
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">Filter by Category</option>
          <option value="food">Food</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="grocery">Grocery</option>
        </select>

        <select value={percentageFilter} onChange={(e) => setPercentageFilter(e.target.value)}>
          <option value="">Filter by Discount</option>
          <option value="10">10% or more</option>
          <option value="20">20% or more</option>
          <option value="50">50% or more</option>
        </select>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <p>Showing {filteredDiscounts.length} active discount offers</p>
      </div>

      {/* Discounts Grid */}
      <div className="offers-grid">
        {filteredDiscounts.map((offer) => (
          <DiscountCard 
            key={offer.id} 
            offer={offer}
            onCardClick={(offer) => {
              console.log('Viewing offer:', offer.title);
              // Handle card click - could open modal or navigate to detail page
            }}
            showSaveButton={true}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscountPage;
