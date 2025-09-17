// src/pages/About.js

import React from 'react';
import './About.css'; // For styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          At Skillfull Technologies, we are more than just a technology provider; we are your strategic partner, founded with a mission to empower businesses through technology, we specialize in delivering innovative and scalable IT solutions that that drive growth and efficiency.
        </p>
        <p>
          Our team of certified experts is passionate about solving complex challenges and providing personalized support. We believe that technology should be a catalyst for success, and we work tirelessly to ensure our clients have the tools and expertise they need to thrive in a digital world.
        </p>
      </div>
      <div className="about-map">
        <h2>Our Corporate Office</h2>
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.908076045579!2d78.3697669148766!3d17.41400878807865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935e4d2a67e7%3A0x7a3a9b3d2b2c938a!2sWeWork%20Krishe%20Emerald!5e0!3m2!1sen!2sin!4v1617876882269!5m2!1sen!2sin"
          width="400px"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps location of Skillfull Technologies"
        ></iframe>
      </div>
    </div>
  );
};

export default About;