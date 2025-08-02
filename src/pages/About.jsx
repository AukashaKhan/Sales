import { FaMapMarkerAlt, FaSearch, FaMobile, FaRocket, FaShieldAlt, FaUsers, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="page">
          <div className="page-header">
            <h1 className="page-title">About Discount Finder</h1>
            <p className="page-subtitle">
              Your ultimate companion for discovering amazing local deals and saving money on your favorite things.
            </p>
          </div>

          <div className="page-content">
            <div className="about-section">
              <div className="section-title">
                <FaRocket />
                Our Mission
              </div>
              <div className="section-content">
                <p>
                  We believe everyone deserves to save money on the things they love. Our mission is to connect you with the best local discounts, deals, and offers in your area, making it easier than ever to discover amazing savings on food, shopping, entertainment, and more.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-title">
                <FaSearch />
                How It Works
              </div>
              <div className="section-content">
                <p>
                  Simply allow location access, and we'll instantly show you personalized discounts near you. Our smart filtering system lets you browse by category, discount type, and search for specific deals. Find exactly what you're looking for with just a few taps!
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-title">
                <FaShieldAlt />
                Why Choose Us
              </div>
              <div className="section-content">
                <p>
                  We partner with local businesses to bring you verified, up-to-date offers. Our platform is designed with your privacy and convenience in mind, ensuring you get the best deals without any hassle.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-title">
                <FaMapMarkerAlt />
                Categories We Cover
              </div>
              <div className="section-content">
                <p>
                  From restaurants and retail stores to entertainment venues and services, we cover a wide range of categories to ensure you never miss out on great deals in your area.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-title">
                <FaMobile />
                Mobile-First Design
              </div>
              <div className="section-content">
                <p>
                  Our website is built with mobile users in mind, ensuring a seamless experience whether you're on your phone, tablet, or desktop. Find deals on the go with our responsive, touch-friendly interface.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-title">
                <FaGlobe />
                Technology
              </div>
              <div className="section-content">
                <p>
                  Built with modern web technologies including React, Vite, and advanced geolocation services. We use real-time data to ensure you always get the most current offers and accurate distance calculations.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-title">
                <FaUsers />
                Getting Started
              </div>
              <div className="section-content">
                <p>
                  Ready to start saving? Simply visit our homepage, allow location access, and browse through the amazing deals in your area. Filter by category, search for specific items, and discover new places to save money!
                </p>
              </div>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="feature-title">Location-Based</div>
                <div className="feature-description">
                  Get personalized deals based on your exact location
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaSearch />
                </div>
                <div className="feature-title">Smart Search</div>
                <div className="feature-description">
                  Find exactly what you're looking for with advanced filtering
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaMobile />
                </div>
                <div className="feature-title">Mobile Optimized</div>
                <div className="feature-description">
                  Perfect experience on all devices and screen sizes
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaShieldAlt />
                </div>
                <div className="feature-title">Verified Deals</div>
                <div className="feature-description">
                  All offers are verified and updated regularly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 