// src/pages/About.js

import React from 'react';
import './About.css'; // For styling
import teamImage from '../images/logoo.png'; // Path to your team image

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
      <div className="about-image">
        <img src={teamImage} alt="A team of professionals working together" />
      </div>
    </div>
  );
};

export default About;