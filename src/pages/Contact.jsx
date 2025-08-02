import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="page">
          <div className="page-header">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Have questions or suggestions? We'd love to hear from you!
            </p>
          </div>

          <div className="page-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-title">Email</div>
                <div className="contact-value">
                  <a href="mailto:hello@discountfinder.com">hello@discountfinder.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-title">Phone</div>
                <div className="contact-value">
                  <a href="tel:+1-555-123-4567">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-title">Address</div>
                <div className="contact-value">
                  123 Discount Street<br />
                  Savings City, SC 12345
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div className="contact-title">Business Hours</div>
                <div className="contact-value">
                  Monday - Friday: 9AM - 6PM<br />
                  Saturday: 10AM - 4PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2 style={{ color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>
                Send us a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner" style={{ width: '20px', height: '20px', marginRight: '8px' }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane style={{ marginRight: '8px' }} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 