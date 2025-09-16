// src/pages/CourseForm.js

import React, { useState, useEffect } from 'react';
import './CourseForm.css';

const CourseForm = ({ courseTitle, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(''); // New state for status message
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to check if submitted
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeName: '',
    state: '',
    duration: '1 month',
  });

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...'); // Show submitting message
    
    // Create an object with the course title and form data
    const enrollmentData = {
      courseTitle: courseTitle,
      ...formData
    };

    try {
      const response = await fetch('/api/enroll', { // New endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enrollmentData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setStatus('Successfully submitted! We will contact you soon.');
        setIsSubmitted(true); // Set state to show success message
      } else {
        setStatus(`Error: ${result.msg}`);
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('Failed to submit. Please try again.');
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className={`form-modal-overlay ${showModal ? 'show' : ''}`}>
      <div className="form-modal-content">
        <button className="close-btn" onClick={handleClose}>&times;</button>
        
        {/* Conditional rendering for the message and form */}
        {!isSubmitted ? (
          <>
            <h2>Enroll in {courseTitle}</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="collegeName" placeholder="College Name" value={formData.collegeName} onChange={handleChange} required />
              <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
              
              <label htmlFor="duration">Duration:</label>
              <select id="duration" name="duration" value={formData.duration} onChange={handleChange} required>
                <option value="1 month">1 month</option>
                <option value="2 months">2 months</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
              </select>
              
              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <div className="status-message">
            <i className="fa-solid fa-check-circle"></i>
            <h3>Success!</h3>
            <p>Your enrollment has been submitted successfully.</p>
            <p>We will contact you soon.</p>
          </div>
        )}
        
        {/* Show a status message during submission */}
        {status && <p className="status-message-text">{status}</p>}
      </div>
    </div>
  );
};

export default CourseForm;