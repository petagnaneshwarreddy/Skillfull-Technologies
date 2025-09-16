// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Training from './pages/Training';
import About from './pages/About';
// Remove the Contact import
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/about" element={<About />} />
        {/* Remove the Contact route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;