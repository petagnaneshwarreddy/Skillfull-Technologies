import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email) {
      setMessage('Please enter your email first.');
      return;
    }
    try {
      const res = await axios.post('https://backend-4138.onrender.com/send-otp', { email });
      setMessage(res.data.message || 'OTP sent.');
      setOtpSent(true);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to send OTP. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setMessage('Passwords do not match.');
      return;
    }
    if (!otpSent) {
      setMessage('Please send OTP first.');
      return;
    }
    try {
      const res = await axios.post('https://backend-4138.onrender.com/register', {
        username,
        email,
        password,
        otp,
      });
      setMessage(res.data.message || 'Registered successfully.');
      if (res.status >= 200 && res.status < 300) {
        setTimeout(() => navigate('/explore/login'), 800);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="button" onClick={handleSendOtp} className="otp-button">
            Send OTP
          </button>
        </div>
        {otpSent && (
          <div className="form-group">
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rePassword">Re-enter Password:</label>
          <input
            type="password"
            id="rePassword"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Register;
