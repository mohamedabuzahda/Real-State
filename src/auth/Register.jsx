import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";
import '../style/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('signup', '').toLowerCase()]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.name) {
      alert('All fields are required!');
      return;
    } else if (!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    // Handle successful signup here
    console.log('Signup submitted:', formData);
  };

  return (
    <div className="register-bg">
      <div className="register-card">
        <div className="register-card-body">
          <h2 className="register-title">Create your AQAR account</h2>
          <p className="register-subtitle">Sign up to continue your experience.</p>
          <form id="signupForm" onSubmit={handleSubmit}>
            <div className="register-input-group">
              <input
                type="text"
                id="signupName"
                className="register-input"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="register-input-group">
              <input
                type="email"
                id="signupEmail"
                className="register-input"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="register-input-group">
              <input
                type="password"
                id="signupPassword"
                className="register-input"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="register-btn">Sign up</button>
          </form>
          <div className="register-or">or sign in with</div>
          <div className="register-socials">
            <button className="register-social-btn fb" type="button"><FaFacebook /></button>
            <button className="register-social-btn google" type="button"><FcGoogle /></button>
            <button className="register-social-btn linkedin" type="button"><GrLinkedin /></button>
          </div>
          <div className="mt-3 text-center">
            <span>Already have an account? </span>
            <Link to="/login" className="register-link">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;