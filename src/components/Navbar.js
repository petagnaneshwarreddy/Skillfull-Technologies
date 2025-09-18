import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Skillfull Technologies Logo" className="logo-img" />
          Skillfull Technologies
        </Link>
      </div>

      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'show' : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu} data-icon="home">Home</Link></li>
        <li><Link to="/services" onClick={toggleMobileMenu} data-icon="services">Services</Link></li>
        <li><Link to="/training" onClick={toggleMobileMenu} data-icon="training">Training</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu} data-icon="about">About</Link></li>
        <li><Link to="/contact" onClick={toggleMobileMenu} data-icon="contact">Contact Us</Link></li>
        <li>
          <Link to="/verify" className="verify-btn" onClick={toggleMobileMenu} data-icon="verify">
            Verify Certificate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;