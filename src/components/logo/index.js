import React from 'react';
import logo from './logo.png';
import './logo.css';

const Logo = ({ size, className }) => (
  <img className={className + ' logo'} src={logo} width={size} />
);

Logo.defaultProps = {
  size: 90,
  className: ''
};

export default Logo;
