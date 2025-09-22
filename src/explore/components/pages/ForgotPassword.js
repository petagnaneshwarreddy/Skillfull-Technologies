// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1=email, 2=otp, 3=new password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Step 1: Send OTP
  const handleSendOtp = async () => {
    try {
      await axios.post('https://backend-4138.onrender.com/send-otp', { email });
      setMessage('OTP sent to your email.');
      setStep(2);
    } catch (err) {
      console.error(err);
      setMessage(err?.response?.data?.message || 'Error sending OTP.');
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    try {
      await axios.post('https://backend-4138.onrender.com/verify-otp', { email, otp });
      setMessage('OTP verified. Enter new password.');
      setStep(3);
    } catch (err) {
      console.error(err);
      setMessage(err?.response?.data?.message || 'Invalid OTP.');
    }
  };

  // Step 3: Reset password
  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      await axios.post('https://backend-4138.onrender.com/reset-password', {
        email,
        newPassword,
      });
      setMessage('Password reset successful. You can now login.');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      console.error(err);
      setMessage(err?.response?.data?.message || 'Error resetting password.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Forgot Password</h2>
      {message && <p style={{ color: 'red' }}>{message}</p>}

      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}

      {step === 3 && (
        <>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
          <button onClick={handleResetPassword}>Reset Password</button>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
