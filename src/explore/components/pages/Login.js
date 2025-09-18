import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
  linkContainer: {
    marginTop: '15px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_BACKEND_URL/login', {
        email,
        password,
      });
      setMessage('Login successful!');
      // Assuming a successful login redirects to the main home page
      navigate('/');
    } catch (error) {
      setMessage(error.response.data.message || 'Login failed. Invalid credentials.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={styles.input} />
        </div>
        <button type="submit" style={styles.submitButton}>Login</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
      <div style={styles.linkContainer}>
        <Link to="/explore/reset-password" style={styles.link}>Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;