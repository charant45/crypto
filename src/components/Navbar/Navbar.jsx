import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import crypto from '../../assets/Crypto.svg'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navber'>
        <span><img src={logo} alt="img"/><img src={crypto} alt="img1"/></span>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign Up<img src={arrow_icon} alt=""/></button>
        </div>
    </div>
  )
}

export default Navbar
