import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondNav.css'; // optional css

const SecondNav = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // redirect back to login
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
        >
          Profile ⬇
          {showProfileMenu && (
            <div className="profile-menu">
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
