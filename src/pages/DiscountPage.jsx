import React from "react";
import "../pages/DiscountPage.css"; // We'll style same as home page

const DiscountPage = () => {
  const discounts = [
    {
      id: 1,
      title: "20% Off at Burger Hub",
      description: "Enjoy a delicious burger meal with 20% off all combos.",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free - Pizza Corner",
      description: "Order a pizza and get the second one free on weekends.",
    },
    {
      id: 3,
      title: "15% Off at Coffee Bliss",
      description: "Start your day right with 15% off all coffees.",
    },
  ];

  return (
    <div className="discount-page">
      {/* Banner Section */}
      <div className="discount-banner">
        <img src="images/Center_Image.jpeg" alt="Discounts Banner" />
        <div className="banner-overlay">
          <h1>Exclusive Discounts</h1>
          <p>Get the best deals from your favorite spots</p>
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <p>Showing {discounts.length} active discount offers</p>
      </div>

      {/* Discounts Grid */}
      <div className="offers-grid">
        {discounts.map((offer) => (
          <div key={offer.id} className="offer-card">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <button>View Offer</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountPage;
