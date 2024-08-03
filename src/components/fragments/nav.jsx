import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonElements from '../elements/button';

const NavigationLayouts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src="./logo.png" alt="" />
      </div>
      <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><ButtonElements text="Sign In"></ButtonElements></li>
      </ul>
      <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={handleClick}>
        <img src="./menu.png" alt="" />
      </div>
    </nav>
  );
};

export default NavigationLayouts;
