import React from 'react';
import logo from './logo.png';
import './logo.css';

const Logo = ({ size }) => <img className="logo" src={logo} width={size} />;

Logo.defaultProps = {
  size: 90
};

export default Logo;
