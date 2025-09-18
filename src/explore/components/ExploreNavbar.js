import React from 'react';
import { Link } from 'react-router-dom';
// 👇 import your logo image
import logo from '../../images/logo.png'; 
// adjust the relative path depending on how deep ExploreNavbar.js is

const ExploreNavbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '220px',
        backgroundColor: '#5b5656ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        boxShadow: '2px 0 5px rgba(75, 160, 18, 0.1)',
        transform: 'translateX(-220px)',
        animation: 'slideIn 0.4s forwards',
      }}
    >
      {/* LOGO */}
      <div style={{ marginBottom: '40px' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>

      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {[
          { to: '/explore', label: 'Courses' },
          { to: '/explore/login', label: 'Login' },
          { to: '/explore/register', label: 'Register' },
        ].map((item) => (
          <li key={item.to} style={{ marginBottom: '40px' }}>
            <Link
              to={item.to}
              style={{
                textDecoration: 'none',
                color: '#1b92bdff',
                fontWeight: 'bold',
                display: 'inline-block',
                transition: 'transform 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.color = '#007bff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '#2bb619ff';
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(-220px); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </nav>
  );
};

export default ExploreNavbar;
