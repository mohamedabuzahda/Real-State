import React from 'react';
import {  Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Villa from './pages/Villa';
import DetailsVilla from './pages/DetailsVilla';
import Department from './pages/Department';
import DetailsDepartment from './pages/DetailsDepartment';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import Orders from './pages/Dashboard/Orders/Orders';
import Login from './auth/Login';
import Register from './auth/Register';


const appRoutes = (
  <>
    <Route  path="/" element={<Home />} />,
    <Route  path="/home" element={<Home />} />,
  <Route  path="/about" element={<About />} />,
  <Route  path="/team" element={<Team />} />,
  <Route  path="/villa" element={<Villa />} />,
  <Route  path="/villa/:id" element={<DetailsVilla />} />,
  <Route  path="/department" element={<Department />} />,
  <Route  path="/department/:id" element={<DetailsDepartment />} />,
  <Route  path="/contact" element={<Contact />} />,
  

  <Route  path="/dashboard" element={<Dashboard />} />,
  <Route  path="/products" element={<Products />} />,
  <Route  path="/products/:id" element={<SingleProduct />} />,
  <Route  path="/cart" element={<Cart />} />,
  <Route  path="/order" element={<Order />} />,
  <Route  path="/orders" element={<Orders />} />,
  <Route  path="/login" element={<Login />} />,
  <Route  path="/register" element={<Register />} />,
  <Route  path="*" element={<NotFound />} />,
  </>
);

export default appRoutes;
