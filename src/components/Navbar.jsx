import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Navbar.module.css"; // Assuming you have a CSS module for styling

const Navbar = () => {
  return (
    <>
      <header className={style.header}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
          <li>
            <Link to="/villas">Villas</Link>
          </li>
          <li>
            <Link to="/Home">
              <p className={style.logo}>Aqar</p>
            </Link>
          </li>

          <li>
            <Link to="/apartments">Apartments</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
