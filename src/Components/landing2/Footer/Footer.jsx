import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Info Section */}
                <div className="footer-section info">
                    <h4>Info</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/journal">Journal</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Support Section */}
                <div className="footer-section support">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="/login">Contact Us</a></li>
                        <li><a href="/shop">Shipping & Returns</a></li>
                        <li><a href="#">How to use this theme</a></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="Newsletter_main">

                    <div className="footer-section newsletter">
                        <h4>Newsletter</h4>
                        <p>Get 15% off your first purchase! Plus, be the first to know about sales, new product launches, and exclusive offers!</p>
                        <div className="newsletter-input">
                            <input type="email" placeholder="Email" disabled />
                            <button>→</button>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="social-icons">
                        <a href="#t"  rel="noopener noreferrer">
                            <FaTwitter  className="svg_media"/>
                        </a>
                        <a href="#f"  rel="noopener noreferrer">
                            <FaFacebookF  className="svg_media"/>
                        </a>
                        <a href="#i"  rel="noopener noreferrer">
                            <FaInstagram  className="svg_media"/>
                        </a>
                        <a href="#y"  rel="noopener noreferrer">
                            <FaYoutube  className="svg_media"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <div className="dropdowns">
                        <div className="dropdown">
                            <label htmlFor="country">Country/Region</label>
                            <select id="country" defaultValue="Australia">
                                <option value="Pakistan">Pakistan (Pak)</option>
                                <option value="Suadi Arab">Suadi Arab (SUD)</option>
                                <option value="Palestinians gaza">Palestinians(Gaza)</option>

                            </select>
                        </div>

                        <div className="dropdown">
                            <label htmlFor="language">Language</label>
                            <select id="language" defaultValue="English">
                                <option className="opt" value="English">English</option>
                                <option className="opt" value="Urdu">Urdu</option>
                                <option className="opt" value="Arbic">Arbic</option>

                            </select>
                        </div>
                    </div>

                    {/* Payment Icons */}
                    <div className="payment-icons">
                        <div className="svg_icon">
                            <SiAmericanexpress className="mastercard1" />
                            <SiMastercard className="mastercard2" />
                            <SiVisa className="mastercard3" />
                            {/* <img className="icon_img" src="https://gatsby-ecommerce-theme.netlify.app/amex.png"/>
                            <img className="icon_img" src="https://gatsby-ecommerce-theme.netlify.app/master.png"/>
                            <img className="icon_img" src="https://gatsby-ecommerce-theme.netlify.app/visa.png"/> */}

                        </div>
                        <div>
                            <p className="copyright">
                                2024 (c) . Built by <a className="lower_anchor" href="#">Matter</a>. Powered by <a className="lower_anchor" href="#">JAMM™</a>.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
