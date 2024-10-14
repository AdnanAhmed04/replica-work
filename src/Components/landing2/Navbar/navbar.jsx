import React, { useState } from "react";
import { FaSearch, FaHeart, FaUser, FaShoppingBag, FaBars } from "react-icons/fa";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Mobile/Tablet Hamburger Menu */}
        <div className="mobile-menu" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Logo */}
        <div className="logo">SYDNEY</div>

        {/* Links for Desktop */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#shop">SHOP</a>
          <a href="#journal">JOURNAL</a>
          <a href="#about">ABOUT</a>
        </div>

        {/* Icons */}
        <div className="nav-icons">
          <FaSearch className="icon" />
          <FaHeart className="icon" />
          <FaUser className="icon" />
          <div className="shopping-bag">
            <FaShoppingBag className="icon" />
            <span className="cart-count">1</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
