import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import "../style/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regex patterns
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email || !password) {
      setErrorMsg("جميع الحقول مطلوبة");
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMsg("يرجى إدخال بريد إلكتروني صحيح");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/signin", {
        email,
        password,
      });

      // Store token and user type in cookies
      cookies.set("Bearer", res.data.token);
      cookies.set("Type", res.data.type);

      setLoading(false);
      navigate("/");
    } catch (err) {
      console.error(err);
      setLoading(false);
      if (err.response && (err.response.status === 400 || err.response.status === 401)) {
        setErrorMsg("بيانات الدخول غير صحيحة");
      } else {
        setErrorMsg("حدث خطأ أثناء تسجيل الدخول");
      }
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-card-body">
          <h2 className="login-title">Welcome back to AQAR!</h2>
          <p className="login-subtitle">Sign in to continue your experience.</p>
          {errorMsg && (
            <div
              style={{
                color: "red",
                marginBottom: "12px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              خطأ فى بياناتك: {errorMsg}
            </div>
          )}
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="login-input-group">
              <input
                type="email"
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
                className="login-input"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-btn">
              Sign in
            </button>
          </form>
          <div className="mt-3 text-center">
            <span>Don't have an account? </span>
            <Link to="/register" className="login-link">
              Register
            </Link>
          </div>
        </div>
      </div>
</div>
);
}
