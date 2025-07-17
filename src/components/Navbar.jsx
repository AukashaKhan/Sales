import React, { useState } from 'react';
import './Navbar.css';

function NavButtons({ onClick }) {
  return (
    <>
      <button className="nav-btn" onClick={onClick}>Places</button>
      <button className="nav-btn" onClick={onClick}>Blogs</button>
      <button className="nav-btn" onClick={onClick}>Location</button>
      <button className="nav-btn" onClick={onClick}>Login</button>
    </>
  );
}

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="public/images/Logo.png" alt="Logo" className="navbar-logo" />
          <input type="text" placeholder="Search..." className="search-box" />
        </div>

        <div className="navbar-right desktop-menu">
          <NavButtons />
        </div>

        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <NavButtons onClick={toggleSidebar} />
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Navbar;
