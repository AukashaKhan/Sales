import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DiscountPage from './pages/DiscountPage';
import './styles/main.scss';


function App() {
  // Simulated user location (replace with geolocation logic if needed)
  const userLocation = {
    latitude: 24.8607,
    longitude: 67.0011,
  };

  return (
    <Router basename={'/Sales'}>
      <div className="App">
        {/* Navbar visible on every page */}
        <Header />

        <Routes>
          {/* Redirect root to sales page */}
          {/* <Route path="/" element={<Navigate to="/sales" />} /> */}

          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Discount page route (navigates on card click) */}
          <Route
            path="/discount/:offerId"
            element={<DiscountPage />}
          />
        </Routes>

        {/* Footer visible on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
