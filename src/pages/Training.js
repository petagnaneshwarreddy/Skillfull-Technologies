// src/pages/Training.js

import React, { useState } from 'react';
import './Training.css';
import CourseForm from './CourseForm'; // Import the form component

// Import all the course icons
import fullstackIcon from '../images/fullstack.png';
import aiIcon from '../images/ai.png';
import cloudIcon from '../images/cloud.png';
import javaIcon from '../images/java.png';
import pythonIcon from '../images/python.png';
import uiuxIcon from '../images/uiux.png';

const Training = () => {
  // State to manage the selected course for the form
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Function to show the form for a specific course
  const handleCardClick = (courseTitle) => {
    setSelectedCourse(courseTitle);
  };

  // Function to close the form
  const handleCloseForm = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="training-container">
      {/* ... (rest of the banner and internships sections) ... */}

      <section className="courses-section">
        <h2 className="courses-heading">Training & Internship Courses</h2>
        <div className="courses-grid">
          {/* Add onClick handlers to each course card */}
          <div className="course-card" onClick={() => handleCardClick('Full Stack Web Development')}>
            <div className="course-icon"><img src={fullstackIcon} alt="Full Stack Icon" /></div>
            <h3>Full Stack Web Development</h3>
            <p>Master both front-end and back-end development to build robust and responsive web applications from scratch.</p>
            <ul className="course-topics">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Node.js, Express</li>
              <li>Database Management (SQL/NoSQL)</li>
            </ul>
          </div>

          <div className="course-card" onClick={() => handleCardClick('Machine Learning & AI')}>
            <div className="course-icon"><img src={aiIcon} alt="AI Icon" /></div>
            <h3>Machine Learning & AI</h3>
            <p>Learn to build and deploy intelligent models for data analysis, computer vision, and automation.</p>
            <ul className="course-topics">
              <li>Python & Libraries (Scikit-learn, TensorFlow)</li>
              <li>Supervised & Unsupervised Learning</li>
              <li>Neural Networks & Deep Learning</li>
            </ul>
          </div>

          <div className="course-card" onClick={() => handleCardClick('Cloud & DevOps')}>
            <div className="course-icon"><img src={cloudIcon} alt="Cloud Icon" /></div>
            <h3>Cloud & DevOps</h3>
            <p>Master cloud infrastructure and automation to build scalable and high-performance secure systems.</p>
            <ul className="course-topics">
              <li>AWS / Azure / GCP</li>
              <li>Docker & Kubernetes</li>
              <li>CI/CD Pipelines (Jenkins / GitHub Actions)</li>
            </ul>
          </div>
          
          <div className="course-card" onClick={() => handleCardClick('Java Development')}>
            <div className="course-icon"><img src={javaIcon} alt="Java Icon" /></div>
            <h3>Java Development</h3>
            <p>Become a proficient Java developer and build robust enterprise applications and back-end systems.</p>
            <ul className="course-topics">
              <li>Core Java & J2EE</li>
              <li>Spring Framework & Spring Boot</li>
              <li>Microservices & REST APIs</li>
            </ul>
          </div>

          <div className="course-card" onClick={() => handleCardClick('Python Development')}>
            <div className="course-icon"><img src={pythonIcon} alt="Python Icon" /></div>
            <h3>Python Development</h3>
            <p>Master Python for a wide range of applications, from web development to data science and automation.</p>
            <ul className="course-topics">
              <li>Python Fundamentals & Packages</li>
              <li>Django & Flask for Web Apps</li>
              <li>Data Analysis with Pandas & NumPy</li>
            </ul>
          </div>

          <div className="course-card" onClick={() => handleCardClick('UI/UX Design')}>
            <div className="course-icon"><img src={uiuxIcon} alt="UI/UX Icon" /></div>
            <h3>UI/UX Design</h3>
            <p>Create intuitive and visually stunning user interfaces and experiences for websites and mobile apps.</p>
            <ul className="course-topics">
              <li>Design Principles & User Research</li>
              <li>Wireframing & Prototyping</li>
              <li>Figma, Sketch, & Adobe XD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Render the form component only if a course is selected */}
      {selectedCourse && (
        <CourseForm
          courseTitle={selectedCourse}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default Training;