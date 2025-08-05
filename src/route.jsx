import React from 'react';
import {  Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Villa from './pages/Villa';
import Detailsvilla from './pages/Detailsvilla';
import Department from './pages/Department';
import Detailsdepartment from './pages/Detailsdepartment';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Order from './pages/Order';
import Login from './auth/Login';
import Register from './auth/Register';


const appRoutes = (
  <>
    <Route  path="/" element={<Home />} />,
    <Route  path="/home" element={<Home />} />,
  <Route  path="/about" element={<About />} />,
  <Route  path="/contact" element={<Contact />} />,
  <Route  path="/dashboard" element={<Dashboard />} />,
  <Route  path="/villa" element={<Villa />} />,
  <Route  path="/villa/:id" element={<Detailsvilla />} />,
  <Route  path="/department" element={<Department />} />,
  <Route  path="/department/:id" element={<Detailsdepartment />} />,
  <Route  path="/cart" element={<Cart />} />,
  <Route  path="/order" element={<Order />} />,
  <Route  path="/login" element={<Login />} />,
  <Route  path="/register" element={<Register />} />,
  <Route  path="*" element={<NotFound />} />,
  </>
);

export default appRoutes;
