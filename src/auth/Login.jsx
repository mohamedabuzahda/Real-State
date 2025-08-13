import { useState } from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regex patterns
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/; // 6 أحرف على الأقل وحرف ورقم

    if (!email || !password) {
      setErrorMsg('جميع الحقول مطلوبة');
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMsg('يرجى إدخال بريد إلكتروني صحيح');
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMsg('كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل وحرف ورقم');
      return;
    }

    setErrorMsg("");
    // تحقق من بيانات المستخدم
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.email !== email || user.password !== password) {
      setErrorMsg('بيانات الدخول غير صحيحة أو لا يوجد حساب مسجل');
      return;
    }
    // تفعيل الدخول
    localStorage.setItem('isAuth', 'true');
    const prevPage = localStorage.getItem('prevPage') || '/';
    window.location.href = prevPage;
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-card-body">
          <h2 className="login-title">Welcome back to AQAR!</h2>
          <p className="login-subtitle">Sign in to continue your experience.</p>
          {errorMsg && (
            <div style={{color: 'red', marginBottom: '12px', fontWeight: 'bold', textAlign: 'center'}}>
              خطأ فى بياناتك: {errorMsg}
            </div>
          )}
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