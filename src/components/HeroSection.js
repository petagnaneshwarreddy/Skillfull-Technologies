import React from 'react';
import './HeroSection.css';
import heroImage from '../images/logo team.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // This path must match the one you defined in App.js
    navigate('/explore'); 
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h4>WE ARE THE BEST</h4>
        <h1>
          Best IT Services Provider <br />
          Our Skillfull Technologies <br />
          In Our Country.
        </h1>
        <p>
          Future proofing digital enterprises from strategy definition to business outcomes
          scaling digital innovations at speed across the entire enterprise footprint...
        </p>
        <div className="cta-buttons">
          <button className="free-quote-btn" onClick={handleExploreClick}>
            Explore Courses →
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={heroImage}
          alt="Skilled professionals working in a modern office"
        />
      </div>
    </section>
  );
};

export default HeroSection;