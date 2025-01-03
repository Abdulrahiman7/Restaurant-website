import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import HeaderImage from "./HeaderImage";

const Header = (props) => {
  return (
    <React.Fragment>
    <div className="header">
      <h2>React Meals</h2>
      <button onClick={props.showCartModal}>
        <span>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        Your Cart 
        <span className="cart-count">0</span>
      </button>
    </div>
    <HeaderImage />
    
    </React.Fragment>
  );
};

export default Header;
