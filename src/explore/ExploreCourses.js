import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExploreNavbar from './components/ExploreNavbar';
// import Courses from './pages/Courses'; // Make sure this file exists
import Login from './components/pages/Login'; // Corrected import path
import Register from './components/pages/Register'; // Corrected import path

const ExploreCourses = () => {
  return (
    <>
      <ExploreNavbar />
      <Routes>
        {/* <Route index element={<Courses />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};

export default ExploreCourses;