import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='header'>
        <h2>React Meals</h2>
        <button><span><FontAwesomeIcon icon={faCartShopping} /></span>Your Cart <span className='cart-count'>0</span></button>
        </div>
  )
}

export default Header