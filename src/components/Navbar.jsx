import React, { useState } from 'react';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/images/Logo.png" alt="Logo" className="navbar-logo" />
          <div className="dropdown-desktop">
            <Dropdown />
          </div>
        </div>

        <div className="navbar-right desktop-menu">
          <button className="nav-btn">Places</button>
          <button className="nav-btn">Blogs</button>
          <button className="nav-btn">Location</button>
          <button className="nav-btn">Login</button>
        </div>

        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <button className="nav-btn">Places</button>
        <button className="nav-btn">Blogs</button>
        <button className="nav-btn">Location</button>
        <button className="nav-btn">Login</button>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Navbar;
