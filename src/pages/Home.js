// src/pages/Home.js

import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from './Services';
import Training from './Training';
import About from './About';
// Remove the Contact import
import './Home.css';

const Home = () => {
  return (
    <>
      <HeroSection />
      
      <Services />
      <Training />
      <About />
      {/* Remove the Contact component here */}
    </>
  );
};

export default Home;