import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <FaMapMarkerAlt />
            Discount Finder
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 