import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  submitButton: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  message: {
    marginTop: '20px',
    color: 'red',
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: '15px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

const Login = () => {
  const [userInput, setUserInput] = useState(''); // username or email
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      // Send userInput as "identifier" to backend
      const response = await axios.post('https://backend-4138.onrender.com/login', {
        identifier: userInput,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setMessage('Login successful! Redirecting...');
        setTimeout(() => navigate('/secondnav'), 1000);
      } else {
        setMessage('Login failed. No token received.');
      }
    } catch (error) {
      console.error(error);
      const errorMsg =
        error?.response?.data?.message || 'Login failed. Invalid credentials.';
      setMessage(errorMsg);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="userInput">Username or Email:</label>
          <input
            type="text"
            id="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
            autoFocus
            style={styles.input}
          />
        </div>
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
        <button type="submit" style={styles.submitButton}>
          Login
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
      <div style={styles.linkContainer}>
        <Link to="/explore/reset-password" style={styles.link}>
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
