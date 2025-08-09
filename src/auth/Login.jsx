<<<<<<< HEAD
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Email and Password are required!');
      return;
    } else if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    // Handle successful login here
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-card-body">
          <h2 className="login-title">Welcome back to AQAR!</h2>
          <p className="login-subtitle">Sign in to continue your experience.</p>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="login-input-group">
              <input
                type="email"
                id="loginEmail"
                className="login-input"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input-group">
              <input
                type="password"
                id="loginPassword"
                className="login-input"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-btn">Sign in</button>
          </form>
          <div className="login-or">or sign in with</div>
          <div className="login-socials">
            <button className="login-social-btn fb" type="button"><FaFacebook /></button>
            <button className="login-social-btn google" type="button"><FcGoogle /></button>
            <button className="login-social-btn linkedin" type="button"><GrLinkedin /></button>
          </div>
          <div className="mt-3 text-center">
            <span>Don't have an account? </span>
            <Link to="/register" className="login-link">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
=======
import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>Please enter your credentials to access your account.</p>
    </div>
  )
}

export default Login
>>>>>>> a6c2a35c224a0b515445a8c1acea1b16485acd8e
