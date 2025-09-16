// src/pages/Contact.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logoo.png\\'; // Make sure this path is correct
import './Contact.css'; // For styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Error: ${result.msg}`);
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-main">
        {/* Company Info Section */}
        <div className="contact-section company-info">
          <div className="company-logo">
            <img src={logo} alt="Skillfull Technologies Logo" />
            <h2>SkillfullTech</h2>
          </div>
          <p>
            A forward-thinking IT company dedicated to delivering innovative technology solutions to businesses worldwide.
          </p>
          <div className="social-icons">
            {/* You'll need Font Awesome for these icons */}
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="contact-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="contact-section get-in-touch">
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="send-message-btn">Send Message</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
      
      {/* Footer */}
      <div className="contact-footer">
        <p>© 2024 Skillfull Technologies. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;