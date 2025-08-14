import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";// تأكد أن المسار صحيح
import "../style/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();
  const cookie = new Cookies();

  const submit = async (e) => {
    e.preventDefault();
    setAccept(true);
    setEmailError(false);

    // تحقق من الإدخال
    if (
      name.length < 3 ||
      email.trim() === "" ||
      password.length < 8 ||
      confirmPassword !== password
    ) {
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      });

      const tokenOfData = res.data.token;
      const typeOfUser = res.data.type;
      cookie.set("Bearer", tokenOfData);
      cookie.set("Type", typeOfUser);

      setLoading(false);
      nav("/");
    } catch (err) {
      if (err.response?.status === 400) {
        setEmailError(true);
      }
      setLoading(false);
    }
  };

  return (
    <div className="register-bg">
      <div className="register-card">
        <div className="register-card-body">
          <h2 className="register-title">Create your AQAR account</h2>
          <p className="register-subtitle">
            Sign up to continue your experience.
          </p>

          <form id="signupForm" onSubmit={submit}>
            {/* Name */}
            <div className="register-input-group">
              <input
                type="text"
                id="signupName"
                className="register-input"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {name.length < 3 && accept && (
                <p className="errorMessage">
                  Your name must be at least 3 characters
                </p>
              )}
            </div>

            {/* Email */}
            <div className="register-input-group">
              <input
                type="email"
                id="signupEmail"
                className="register-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email === "" && accept && (
                <p className="errorMessage">Email is required</p>
              )}
              {emailError && (
                <p className="errorMessage">This email is already taken</p>
              )}
            </div>

            {/* Password */}
            <div className="register-input-group">
              <input
                type="password"
                id="signupPassword"
                className="register-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password.length < 8 && accept && (
                <p className="errorMessage">
                  Password must be at least 8 characters
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="register-input-group">
              <input
                type="password"
                id="signupConfirmPassword"
                className="register-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPassword !== password && accept && (
                <p className="errorMessage">Passwords do not match</p>
              )}
            </div>

            <button type="submit" className="register-btn">
              Sign up
            </button>
          </form>

          <div className="mt-3 text-center">
            <span>Already have an account? </span>
            <Link to="/login" className="register-link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
