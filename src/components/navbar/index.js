import React from 'react';
import Logo from '../logo';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <Logo />
      <span>Réussir son permis moto</span>
    </div>
  </nav>
);

export default Navbar;
