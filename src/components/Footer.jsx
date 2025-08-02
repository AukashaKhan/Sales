import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-title">
              <FaMapMarkerAlt style={{ marginRight: '8px' }} />
              Discount Finder
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
              Your ultimate companion for discovering amazing local deals and saving money on your favorite things. Find the best discounts near you with our location-based platform.
            </p>
          </div>

          <div className="footer-section">
            <div className="footer-title">Quick Links</div>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="footer-title">Contact Info</div>
            <ul className="footer-links">
              <li>
                <a href="mailto:hello@discountfinder.com">
                  <FaEnvelope style={{ marginRight: '8px' }} />
                  hello@discountfinder.com
                </a>
              </li>
              <li>
                <a href="tel:+1-555-123-4567">
                  <FaPhone style={{ marginRight: '8px' }} />
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <FaMapMarkerAlt style={{ marginRight: '8px' }} />
                123 Discount Street<br />
                Savings City, SC 12345
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="footer-title">Follow Us</div>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: '1rem', fontSize: '0.9rem' }}>
              Stay updated with the latest deals and offers!
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 Discount Finder. Made with <FaHeart style={{ color: '#ef4444', margin: '0 4px' }} /> for savings enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 