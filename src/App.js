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

// 🔹 Import your new components
import Login from './explore/components/pages/Login';
import SecondNav from './explore/components/pages/SecondNav';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route
        path="/services"
        element={
          <>
            <Navbar />
            <Services />
          </>
        }
      />
      <Route
        path="/training"
        element={
          <>
            <Navbar />
            <Training />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
          </>
        }
      />
      <Route
        path="/verify"
        element={
          <>
            <Navbar />
            <Verify />
          </>
        }
      />

      {/* 👇 catch all nested routes for Explore */}
      <Route path="/explore/*" element={<ExploreCourses />} />

      {/* 🔹 Added login route (no Navbar) */}
      <Route path="/login" element={<Login />} />

      {/* 🔹 Added SecondNav route (no Navbar, uses its own nav) */}
      <Route path="/secondnav" element={<SecondNav />} />
    </Routes>
  );
}

export default App;
