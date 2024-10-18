import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className={styles.navbar}>
      <div className={styles.shippingText}>Free shipping world-wide</div>
      <div className={styles.navbarContent}>
        <ul className={`${styles.navbarMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <li className={`${styles.navbarItem} ${styles.dropdownTrigger}`}>
            <Link className='reove_underline' to="/shop">SHOP</Link>
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownSection}>
                <h3>WOMAN</h3>
                <p>All Clothing</p>
                <p>Sweatshirts & Hoodies</p>
                <p>Jackets</p>
                <p>Trousers</p>
              </div>
              <div className={styles.dropdownSection}>
                <h3>MEN</h3>
                <p>All Clothing</p>
                <p>Sweatshirts & Hoodies</p>
                <p>Jackets</p>
                <p>Trousers</p>
                <p>Pants</p>
              </div>
              <div className={styles.dropdownSection}>
                <h3>ACCESSORIES</h3>
                <p>Caps & Scarves</p>
                <p>Bags</p>
              </div>
              <div className={styles.dropdownImages}>
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
          </li>
          <li className={styles.navbarItem}>
            <Link className='reove_underline' to="/journal">JOURNAL</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className='reove_underline' to="/about">ABOUT</Link>
          </li>
        </ul>
        <span className={styles.navbarLogo}>SYDNEY</span>
        <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
          &#9776;
        </div>
        <div className={styles.navbarIcons}>
          <Link className="remove_css" to="/login">
            <span>🔍</span>
          </Link>
          <Link className='reove_underline' className="remove_css" to="/login">
            <span>❤️</span>
          </Link>
          <Link className='reove_underline' className="remove_css" to="/login">
            <span>👤</span>
          </Link>
          <span>🔒</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
