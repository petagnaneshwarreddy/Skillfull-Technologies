// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Company Info */}
        <div className="footer-section company-info">
          <div className="company-logo">
            <img src={logo} alt="Skillfull Technologies Logo" />
            <h2>SkillfullTech</h2>
          </div>
          <p>
            A forward-thinking IT company dedicated to delivering innovative technology solutions to businesses worldwide.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/skillfulltech" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/skillfulltech" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/skillfulltech" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 Skillfull Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
