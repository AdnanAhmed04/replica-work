import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Navbar.module.css';



const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="shipping-text">Free shipping worldwide</div>
      <div className="navbar-content">
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li
            className="navbar-item dropdown-trigger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/shop">SHOP</Link>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h3 className="heading3">WOMAN</h3>
                  <p>All Clothing</p>
                  <p>Sweatshirts & Hoodies</p>
                  <p>Jackets</p>
                  <p>Trousers</p>
                </div>
                <div className="dropdown-section">
                  <h3 className="heading3">MEN</h3>
                  <p>All Clothing</p>
                  <p>Sweatshirts & Hoodies</p>
                  <p>Jackets</p>
                  <p>Trousers</p>
                  <p>Pants</p>
                </div>
                <div className="dropdown-section">
                  <h3 className="heading3">ACCESSORIES</h3>
                  <p>Caps & Scarves</p>
                  <p>Bags</p>
                </div>
                <div className="dropdown-images">
                  <img
                    src="https://gatsby-ecommerce-theme.netlify.app/headerPic1.png"
                    alt="Product 1"
                  />
                  <img
                    src="https://gatsby-ecommerce-theme.netlify.app/headerPic2.png"
                    alt="Product 2"
                  />
                </div>
              </div>
            )}
          </li>
          <li className="navbar-item">
            <Link to="/journal">JOURNAL</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
        <span className="navbar-logo">SYDNEY</span>
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
        <div className="navbar-icons">
          <Link className='remove_css' to="/login">
            <span>🔍</span>          </Link>

          <Link className='remove_css' to="/login">
            <span>❤️</span>          </Link>

          <Link className='remove_css' to="/login">
            <span>👤</span>
          </Link>
          <span>🔒</span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
