// src/explore/components/pages/SecondNav.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './SecondNav.css'; // optional CSS

const SecondNav = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [user, setUser] = useState({ username: '', profilePic: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUser({
          username: decoded.username,
          profilePic: decoded.profilePic || '/default-avatar.png',
        });
      } catch (err) {
        console.error('Invalid token', err);
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // redirect to login
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="nav-item" onClick={() => navigate('/')}>Home</span>
        <span className="nav-item" onClick={() => navigate('/courses')}>Courses</span>
        <span className="nav-item" onClick={() => navigate('/search')}>Search</span>
      </div>

      <div className="nav-right">
        <div
          className="profile"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <img
            src={user.profilePic || '/default-avatar.png'}
            alt="Profile"
            style={{
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: '8px',
              border: '1px solid #007bff',
            }}
          />
          <span>{user.username || 'Profile'} ⬇</span>

          {showProfileMenu && (
            <div className="profile-menu" style={{ right: 0 }}>
              <div onClick={() => navigate('/profile')}>View Profile</div>
              <div onClick={() => navigate('/dashboard')}>Dashboard</div>
              <div onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SecondNav;
