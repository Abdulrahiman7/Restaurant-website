import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import cartImage from "../../assets/header.jpg";

const Header = () => {
  return (
    <React.Fragment>
    <div className="header">
      <h2>React Meals</h2>
      <button>
        <span>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        Your Cart 
        <span className="cart-count">0</span>
      </button>
    </div>
    <div className="header-image">
        <div className="summary">
            <p>Welcome to React Meals, where culinary artistry meets exceptional dining experiences. Located in the heart of Bangalore, we pride ourselves on offering a diverse menu that highlights the freshest local ingredients and global flavors.</p>
        </div>
    <img src={cartImage} alt='foods in the table' />
    </div>
    
    </React.Fragment>
  );
};

export default Header;
