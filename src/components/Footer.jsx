import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

import { FaCartShopping } from "react-icons/fa6";
=======
>>>>>>> a6c2a35c224a0b515445a8c1acea1b16485acd8e
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
<<<<<<< HEAD
          <li>
            <Link to="/cart"><FaCartShopping /></Link>
          </li>
=======
>>>>>>> a6c2a35c224a0b515445a8c1acea1b16485acd8e
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
