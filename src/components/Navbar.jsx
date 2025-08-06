import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Navbar.module.css"; 

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
            <Link to="/villa">Villas</Link>
          </li>
          <li>
            <Link to="/home">
              <p className={style.logo}>Aqar</p>
            </Link>
          </li>

          <li>
            <Link to="/department">Appartments</Link>
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
