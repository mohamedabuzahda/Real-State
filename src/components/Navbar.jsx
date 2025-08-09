<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/WhatsApp Image 2025-08-07 at 19.38.18_6aa2da4a.png"; 
import style from "../style/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={style.header}>
      <div className={style.navbarTop}>
        
             <Link to="/home" onClick={handleNavClick}>
          <img src={logo} alt="Logo" className={style.logos} />
        </Link>
       
        <button
          className={style.menuIcon}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <nav className={`${style.navContainer} ${menuOpen ? style.open : ""}`}>
        <ul className={style.navLinks}>
          <li>
            <Link to="/about" onClick={handleNavClick}>About</Link>
          </li>
          <li>
            <Link to="/team" onClick={handleNavClick}>Team</Link>
          </li>
          <li>
            <Link to="/villa" onClick={handleNavClick}>Villas</Link>
          </li>
          <li>
             <Link to="/home" onClick={handleNavClick}>
          <img src={logo} alt="Logo" className={style.logo} />
        </Link>
          </li>
          <li>
            <Link to="/department" onClick={handleNavClick}>Apartments</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavClick}>Contact</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleNavClick}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
=======
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
>>>>>>> a6c2a35c224a0b515445a8c1acea1b16485acd8e
