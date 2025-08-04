import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Footer.module.css"; // Assuming you have a CSS module for styling
const Footer = () => {
  return (
    <div>
      <footer className={style.footer}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <h3>The World's Finest Real Estate</h3>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
        <p className={style.copyright}>
          &copy; 2025 <span className={style.logo}>Aqar</span> Real Estate App.
          All rights reserved by <span className={style.logo}>CodeX</span>.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
