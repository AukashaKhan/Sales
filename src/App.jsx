import React from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Banner Image */}
      <div className="banner">
        <img src="images/Center_Image.jpeg" alt="Banner Image" />
      </div>

      {/* Restaurant Info */}
      <div className="restaurant-info">
        <img src="images/Logo.png" className="Logo" alt="Logo" />
        <div className="restaurant-name">Al-Habib Restaurant</div>
        <div className="actions">
          <button className="btn">🔔 Follow</button>
          <button className="btn">📤 Share</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <div className="tab active">Overview</div>
        <div className="tab">Card Offers</div>
        <div className="tab">Menu</div>
        <div className="tab">Reviews</div>
      </div>

      {/* Description */}
      <p className="description">
        The ultimate combination of food and fun.
      </p>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat blue">
          <div className="stat-value">4</div>
          <div className="stat-label">Deals by partners</div>
        </div>
        <div className="stat red">
          <div className="stat-value">4</div>
          <div className="stat-label">Rated by 4 users</div>
        </div>
        <div className="stat navy">
          <div className="stat-value">3</div>
          <div className="stat-label">Branches in city</div>
        </div>
      </div>

      {/* Card Offers */}
      <h3 className="section-title">Card Offers</h3>
      <div className="offers">
        <div className="offer-card">
          <img src="images/allied.png" alt="Allied Bank" />
          <div className="offer-info">
            <div className="offer-title">Allied Bank</div>
            <div className="offer-subtitle">2 Card Offers</div>
          </div>
          <div className="offer-badge">40%</div>
        </div>
        <div className="offer-card">
          <img src="images/hbl.png" alt="HBL" />
          <div className="offer-info">
            <div className="offer-title">HBL Islamic Bank Limited</div>
            <div className="offer-subtitle">1 Card Offer</div>
          </div>
          <div className="offer-badge">20%</div>
        </div>
      </div>
    </div>
  );
}

export default App;
