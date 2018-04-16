import React from 'react';
import Logo from '../logo';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container justify-content-between d-flex">
      <a className="navbar-brand" href="#">
        <Logo className="d-inline-block align-center" size={70} />
        Réussir son permis moto
      </a>
    </div>
  </nav>
);

export default Navbar;
