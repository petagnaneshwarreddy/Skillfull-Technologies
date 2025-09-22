// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({ username: '', email: '', profilePic: '' });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUser({ username: decoded.username, email: decoded.email, profilePic: decoded.profilePic || '' });
      } catch (err) {
        console.error('Invalid token', err);
        localStorage.removeItem('token');
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // Update preview when user selects a file
  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview('');
    }
  }, [selectedFile]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('Please select a file first.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('profilePic', selectedFile);
      formData.append('email', user.email);

      // Backend endpoint to save/update profile picture
      const response = await axios.post('https://backend-4138.onrender.com/api/upload-profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setUser({ ...user, profilePic: response.data.profilePic });
      setSelectedFile(null);
      setPreview('');
      setMessage('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to upload profile picture.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
      <h2>Profile</h2>
      
      {/* Profile Picture */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src={preview || user.profilePic || '/default-avatar.png'}
          alt="Profile"
          style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #007bff' }}
        />
      </div>

      {/* File input */}
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <br />
      <button
        onClick={handleUpload}
        style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
      >
        {user.profilePic ? 'Update Profile Picture' : 'Upload Profile Picture'}
      </button>

      {/* User details */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}

      <button
        onClick={() => navigate(-1)}
        style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
      >
        Back
      </button>
    </div>
  );
};

export default Profile;
