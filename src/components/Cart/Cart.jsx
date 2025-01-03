import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./Cart.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items, removeCartItem } = useContext(CartContext);

  return (
    <Modal>
      {items.length > 0 ? (
        items.map((item) => <CartItem key={item.id} item={item}/>)
      ) : (
        <div>
          <p>no items in cart</p>
          <Button onClick={props.closeModal}>close</Button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
