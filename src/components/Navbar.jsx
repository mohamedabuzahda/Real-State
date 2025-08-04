import React from 'react'
import { Link } from 'react-router-dom';
import style from '../style/Navbar.module.css'; // Assuming you have a CSS module for styling




const Navbar = () => {
  return (
   <>
    <header className={style.header}>
     
   
        
    
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/Home"><p className={style.logo}>3KAR</p></Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
     
   </header>
   </>
  );
}

export default Navbar
