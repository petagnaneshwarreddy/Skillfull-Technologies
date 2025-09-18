import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Define styles for the component
const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  otpButton: {
    marginTop: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    color: 'red',
  },
};

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
      const res = await axios.post(
        'https://backend-4138.onrender.com/send-otp',
        { email }
      );
      console.log('OTP response:', res.status, res.data);
      setMessage(res.data.message || 'OTP sent.');
      setOtpSent(true);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Failed to send OTP. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      const res = await axios.post(
        'https://backend-4138.onrender.com/register',
        { username, email, password, otp }
      );
      console.log('Register response:', res.status, res.data);
      setMessage(res.data.message || 'Registered successfully.');

      // Redirect on any successful status (200–299)
      if (res.status >= 200 && res.status < 300) {
        // Give a small delay so the user sees the message
        setTimeout(() => {
          navigate('/explore/login');
        }, 800);
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <button
            type="button"
            onClick={handleSendOtp}
            style={styles.otpButton}
          >
            Send OTP
          </button>
        </div>
        {otpSent && (
          <div style={styles.formGroup}>
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={styles.input}
            />
          </div>
        )}
        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="rePassword">Re-enter Password:</label>
          <input
            type="password"
            id="rePassword"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Register
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default Register;
