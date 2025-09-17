import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Training from './pages/Training';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Verify from './pages/Verify';   
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;