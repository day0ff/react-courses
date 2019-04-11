import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="Navigation">
    <NavLink to="/" className="nav">Home</NavLink>
    <NavLink to="/books" className="nav">Books</NavLink>
    <NavLink to="/cart" className="nav">Cart</NavLink>
    <NavLink to="/login" className="nav">Login</NavLink>
  </nav>
);

export default Navigation;
