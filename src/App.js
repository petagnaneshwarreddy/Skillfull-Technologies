import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Training from './pages/Training';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Verify from './pages/Verify'; 
import ExploreCourses from './explore/ExploreCourses';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Home />
        </>
      } />
      <Route path="/services" element={
        <>
          <Navbar />
          <Services />
        </>
      } />
      <Route path="/training" element={
        <>
          <Navbar />
          <Training />
        </>
      } />
      <Route path="/about" element={
        <>
          <Navbar />
          <About />
        </>
      } />
      <Route path="/contact" element={
        <>
          <Navbar />
          <Contact />
        </>
      } />
      <Route path="/verify" element={
        <>
          <Navbar />
          <Verify />
        </>
      } />

      {/* 👇 catch all nested routes for Explore */}
      <Route path="/explore/*" element={<ExploreCourses />} />
    </Routes>
  );
}

export default App;
