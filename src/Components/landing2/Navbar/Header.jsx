import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';





const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="shipping-text">Free shipping worldwide</div>
      <div className="navbar-content">
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>

        <Link className='navbar-item' to="/">
            <li className="navbar-item">Home</li>
          </Link>
          <Link className='navbar-item' to="/Shop">

            <li
              className="navbar-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} 
            >
              SHOP
              {isDropdownVisible && (
                <div className="dropdown-menu">
                  <div className="dropdown-section">
                    <h3>WOMAN</h3>
                    <p>All Clothing</p>
                    <p>Sweatshirts & Hoodies</p>
                    <p>Jackets</p>
                    <p>Trousers</p>
                  </div>
                  <div className="dropdown-section">
                    <h3>MEN</h3>
                    <p>All Clothing</p>
                    <p>Sweatshirts & Hoodies</p>
                    <p>Jackets</p>
                    <p>Trousers</p>
                    <p>Pants</p>
                  </div>
                  <div className="dropdown-section">
                    <h3>ACCESSORIES</h3>
                    <p>Caps & Scarves</p>
                    <p>Bags</p>

                  </div>
                  <div className="dropdown-images">
                    <img src="https://gatsby-ecommerce-theme.netlify.app/headerPic1.png?imgcdn=true" alt="Product 1" />
                    <img src="https://gatsby-ecommerce-theme.netlify.app/headerPic2.png?imgcdn=true" alt="Product 2" />
                  </div>
                </div>
              )}
            </li>
          </Link>

          <Link className='navbar-item' to="/journal">
            <li className="navbar-item">JOURNAL</li>
          </Link>
          <Link className='navbar-item' to="/about">
            <li className="navbar-item">ABOUT</li>
          </Link>

        </ul>
        <span className="navbar-logo">SYDNEY</span>
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
        <div className="navbar-icons">
          <span>🔍</span>
          <span>❤️</span>
          <span>👤</span>
          <span>🔒</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;