import React from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import './App.css';

function App() {
  const allRestaurants = [
    { name: 'Al-Habib Restaurant', description: 'The ultimate combination of food and fun.', logo: '/images/Logo.png' },
    { name: 'Shaheen Shinwari', description: 'Authentic taste of the North.', logo: '/images/Logo.png' },
    { name: 'Kolachi Restaurant', description: 'Fine dining by the sea.', logo: '/images/Logo.png' },
    { name: 'Student Biryani', description: 'Legendary biryani for everyone.', logo: '/images/Logo.png' },
    { name: 'Javed Nihari', description: 'Iconic breakfast spot.', logo: '/images/Logo.png' },
    { name: 'Bundu Khan', description: 'BBQ at its best.', logo: '/images/Logo.png' },
    { name: 'Xander\'s', description: 'Modern casual dining.', logo: '/images/Logo.png' },
    { name: 'Del Frio', description: 'Desserts & comfort food.', logo: '/images/Logo.png' },
    { name: 'Kolachi Restaurant', description: 'Fine dining by the sea.', logo: '/images/Logo.png' },
    { name: 'Student Biryani', description: 'Legendary biryani for everyone.', logo: '/images/Logo.png' },
    { name: 'Javed Nihari', description: 'Iconic breakfast spot.', logo: '/images/Logo.png' },
    { name: 'Bundu Khan', description: 'BBQ at its best.', logo: '/images/Logo.png' },
    { name: 'Xander\'s', description: 'Modern casual dining.', logo: '/images/Logo.png' },
    { name: 'Del Frio', description: 'Desserts & comfort food.', logo: '/images/Logo.png' },
  ];

  return (
    <div>
      <Navbar />

      {/* Banner */}
      <div className="banner">
        <img src="/images/Center_Image.jpeg" alt="Banner" />
      </div>

      {/* Dropdown (Mobile Only) */}
      <div className="dropdown-mobile">
        <Dropdown />
      </div>

      {/* Restaurant List */}
      <div className="restaurant-list">
        {allRestaurants.map((res, index) => (
          <div className="restaurant-card" key={index}>
            <img src={res.logo} alt="Logo" className="restaurant-card-logo" />
            <div className="restaurant-card-details">
              <div className="restaurant-card-name">{res.name}</div>
              <p className="restaurant-card-desc">{res.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
