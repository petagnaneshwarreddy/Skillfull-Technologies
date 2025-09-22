import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 🔹 Common Navbar
import Navbar from './components/Navbar';

// 🔹 Main pages
import Home from './pages/Home';
import Services from './pages/Services';
import Training from './pages/Training';
import About from './pages/About';
import Contact from './pages/Contact';
import Verify from './pages/Verify';

// 🔹 Explore pages
import ExploreCourses from './explore/ExploreCourses';

// 🔹 Auth pages
import Login from './explore/components/pages/Login';
import SecondNav from './explore/components/pages/SecondNav';

// 🔹 Forgot Password page (new)
import ForgotPassword from './explore/components/pages/ForgotPassword';

function App() {
  return (
    <Routes>
      {/* ✅ Main pages with Navbar */}
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

      {/* ✅ Nested Explore routes */}
      <Route path="/explore/*" element={<ExploreCourses />} />

      {/* ✅ Auth pages (no Navbar) */}
      <Route path="/login" element={<Login />} />
      <Route path="/secondnav" element={<SecondNav />} />

      {/* ✅ Forgot Password route (no Navbar) */}
      <Route path="/explore/reset-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
