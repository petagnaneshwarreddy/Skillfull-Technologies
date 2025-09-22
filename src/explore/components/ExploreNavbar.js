import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const ExploreNavbar = () => {
  return (
    <nav
      style={{
        // common styles
        backgroundColor: '#5b5656ff',
        boxShadow: '2px 0 5px rgba(75, 160, 18, 0.1)',
      }}
      className="explore-nav"
    >
      {/* LOGO */}
      <div className="logo-wrapper">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
      </div>

      <ul className="nav-list">
        {[
          // { to: '/explore', label: 'Compiler' },
          { to: '/explore/login', label: 'Login' },
          { to: '/explore/register', label: 'Register' },
        ].map((item) => (
          <li key={item.to} className="nav-item">
            <Link to={item.to} className="nav-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <style>{`
        /* default: sidebar for large screens */
        .explore-nav {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          transform: translateX(-220px);
          animation: slideIn 0.4s forwards;
        }

        .logo-wrapper {
          margin-bottom: 40px;
        }

        .logo {
          width: 200px;
          height: auto;
        }

        .nav-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
          width: 100%;
          text-align: center;
        }

        .nav-item {
          margin-bottom: 40px;
        }

        .nav-link {
          text-decoration: none;
          color: #1b92bdff;
          font-weight: bold;
          display: inline-block;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .nav-link:hover {
          transform: scale(1.1);
          color: #007bff;
        }

        @keyframes slideIn {
          from { transform: translateX(-220px); }
          to { transform: translateX(0); }
        }

        /* mobile/tablet: top bar */
        @media (max-width: 768px) {
          .explore-nav {
            position: fixed;
            top: 0;
            left: 0;
            height: auto;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 15px;
            transform: none;
            animation: none;
          }
          .logo-wrapper {
            margin-bottom: 0;
          }
          .logo {
            width: 120px;
          }
          .nav-list {
            display: flex;
            gap: 15px;
            margin: 0;
          }
          .nav-item {
            margin-bottom: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default ExploreNavbar;
