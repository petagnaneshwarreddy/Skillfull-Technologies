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
        <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/services" onClick={toggleMobileMenu}>Services</Link></li>
        <li><Link to="/training" onClick={toggleMobileMenu}>Training</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMobileMenu}>Contact Us</Link></li>
        <li>
          <Link to="/verify" className="verify-btn" onClick={toggleMobileMenu}>
            Verify Certificate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;