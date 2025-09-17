import React, { useState } from 'react';
import './Verify.css';

const Verify = () => {
  const [certificateId, setCertificateId] = useState('');
  const [enrollmentDetails, setEnrollmentDetails] = useState(null);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setCertificateId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!certificateId.trim()) {
      setStatus('Please enter a certificate ID.');
      return;
    }

    setStatus('Verifying...');
    setEnrollmentDetails(null);

    try {
      // Use the new, correct Render backend URL
      const response = await fetch(`https://backend-4138.onrender.com/api/verify/${certificateId}`); 
      const result = await response.json();

      if (response.ok) {
        setEnrollmentDetails(result); 
        setStatus('Verification successful!');
      } else {
        setEnrollmentDetails(null);
        setStatus(`Error: ${result.msg}`);
      }
    } catch (error) {
      console.error('Verification failed:', error);
      setEnrollmentDetails(null);
      setStatus('Failed to connect to server. Please try again.');
    }
  };

  const handleNewSearch = () => {
    setCertificateId('');
    setEnrollmentDetails(null);
    setStatus('');
  };

  return (
    <div className="verify-container">
      <h1>Verify Your Certificate</h1>
      
      {!enrollmentDetails ? (
        <>
          <p>Enter the unique certificate ID to verify the details.</p>
          <form onSubmit={handleSubmit} className="verify-form">
            <input 
              type="text" 
              placeholder="Enter Certificate ID"
              value={certificateId}
              onChange={handleChange}
              required
            />
            <button type="submit">Verify</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </>
      ) : (
        <div className="certificate-details">
          <h2>Certificate Details</h2>
          <p><strong>Full Name:</strong> {enrollmentDetails.fullName}</p>
          <p><strong>Course:</strong> {enrollmentDetails.courseTitle}</p>
          <p><strong>College:</strong> {enrollmentDetails.collegeName}</p>
          <p><strong>Date of Enrollment:</strong> {new Date(enrollmentDetails.createdAt).toLocaleDateString()}</p>
          <p><strong>Status:</strong> Valid</p>
          <button onClick={handleNewSearch} className="new-search-btn">Verify Another Certificate</button>
        </div>
      )}
    </div>
  );
};

export default Verify;