import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="Navigation">
    <NavLink className="nav">Home</NavLink>
    <NavLink className="nav">Books</NavLink>
    <NavLink className="nav">Cart</NavLink>
    <NavLink className="nav">Login</NavLink>
  </nav>
);

export default Navigation;
