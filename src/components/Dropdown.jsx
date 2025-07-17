import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Offers ▼
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button className="dropdown-item">Overview</button>
          <button className="dropdown-item">Card Offers</button>
          <button className="dropdown-item">Other Offers</button>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
