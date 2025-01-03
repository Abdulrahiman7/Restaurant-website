import React from "react";
import "./CartItem.css";
import Button from "../UI/Button";

const CartItem = (props) => {
  return (
    <div>
      <p>{props.item.name}</p>
      <div className="-price">
        <h2>{props.item.price}</h2>
        <h2>{props.item.quantity}</h2>
      </div>
      <div className="actions">
        <Button onClick={props.closeModal}>close</Button>
        <Button>order</Button>
      </div>
    </div>
  );
};

export default CartItem;
