import React from 'react';
import {  Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Villa from './pages/Villa';
import Detailsvilla from './pages/Detailsvilla';
import Department from './pages/Department';
import Detailsdepartment from './pages/Detailsdepartment';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Order from './pages/Order';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Dashboard/Users/Users';
import AddUser from './pages/Dashboard/Users/AddUser';
import DashboardProducts from './pages/Dashboard/Products/Products';
import AddProducts from './pages/Dashboard/Products/AddProduct';
import Orders from './pages/Dashboard/Orders/Orders';


const appRoutes = (
  <>
    <Route path="/" element={<Home />} />,
    <Route path="/home" element={<Home />} />,
    <Route path="/about" element={<About />} />,
    <Route path="/team" element={<Team />} />,
    <Route path="/contact" element={<Contact />} />,
    <Route path="/dashboard" element={<Dashboard />}>
      <Route path="users" element={<Users />} />
      <Route path="add-user" element={<AddUser />} />
      <Route path="products" element={<DashboardProducts />} />
      <Route path="add-products" element={<AddProducts />} />
      <Route path="orders" element={<Orders />} />
    </Route>
    ,
    <Route path="/villa" element={<Villa />} />,
    <Route path="/villa/:id" element={<Detailsvilla />} />,
    <Route path="/department" element={<Department />} />,
    <Route path="/department/:id" element={<Detailsdepartment />} />,
    <Route path="/cart" element={<Cart />} />,
    <Route path="/order" element={<Order />} />,
    <Route path="/login" element={<Login />} />,
    <Route path="/register" element={<Register />} />,
    <Route path="*" element={<NotFound />} />,
  </>
);

export default appRoutes;
