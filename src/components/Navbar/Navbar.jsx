import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import crypto from '../../assets/Crypto.svg';

const Navbar = () => {

  return (
    <div className='navbar'>
      <span className='logo-container'>
        <img src={logo} alt="Logo" className='logo' />
        <img src={crypto} alt="Crypto" className='img' />
      </span>
      <ul >
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='INR'>INR</option>
        </select>
      </div>
      <button className='get-started-btn'>Get Started</button>
    </div>
  );
};

export default Navbar;
