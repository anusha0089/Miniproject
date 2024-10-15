import React from 'react';
import './Homepage.css';
import Special from './Special'; // Import the Special component

const images = [
  'Images/food2.jpg',
  'Images/1.jpg',
  'Images/2.jpg',
  'Images/4.jpg',
  'Images/6.jpg',
  'Images/7.jpg',
  'Images/9.jpg',
  'Images/16.jpg',
];

const Homepage: React.FC = () => {
  return (
    <div className="homepage-container">
      {/* Location Dropdown */}
      <div className="location-dropdown">
        <span className="location-icon">&#x1F4CD;</span>
        <select className="location-select">
          <option value="Hyderabad">Hyderabad - Jublee Hills</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>

      {/* Special Weather Update Section */}
      <Special /> {/* Integrate the Special component here */}

      {/* Image Gallery Section */}
      <div className="gallery-section">
        <h2 className="gallery-title">Discover Top Dining Experiences</h2>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Food ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome-message">
        <h1 className="welcome-header">Welcome to Dine Discover</h1>
        <p className="welcome-subheader">Explore the best dining experiences tailored just for you.</p>
        <button className="explore-now">Explore Now !</button>
      </div>

      {/* Best Offers Section */}
      <div className="best-offers">
        <h2>Best Offers</h2>
        <div className="offers-container">
          <div className="offer-card">Flat 25% OFF - Instant Discount</div>
          <div className="offer-card">Flat 30% OFF - Instant Discount</div>
          <div className="offer-card">Flat 20% OFF - Instant Discount</div>
          <div className="offer-card">Flat 15% OFF - Instant Discount</div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Available In</h3>
            <ul>
              <li>Hyderabad</li>
              <li>Mumbai</li>
              <li>Delhi</li>
              <li>Bangalore</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Discover</h3>
            <p>Trending Restaurants</p>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Top Cuisines</h3>
            <ul>
              <li>Chinese</li>
              <li>Italian</li>
              <li>South Indian</li>
              <li>Mexican</li>
              <li>Barbecue</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
