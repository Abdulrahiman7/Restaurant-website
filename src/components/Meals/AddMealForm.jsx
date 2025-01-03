import React, { useContext, useState } from 'react'
import Button from '../UI/Button'
import "./AddMealForm.css";
import CartContext from '../../store/cart-context';
const AddMealForm = (props) => {
  const [quantitySelected, setQuantitySelected]=useState(1);
  const {addToCart}=useContext(CartContext);
  const quantitySelectedHandler=(event)=>{
    setQuantitySelected(event.target.value);
  }
  const formSubmitHandler=(event)=>{
      event.preventDefault();
      const itemId=event.target.parentElement.id;
      const cartItem={
        id:itemId,
        quantity:quantitySelected
      }
      addToCart(cartItem);
  }
  return (
  
        <form onSubmit={formSubmitHandler} className='addToCartForm' id={props.id}>
          <div className='quantity-selector'>
          <label htmlFor="quantity">Quantity:</label>
          <select id="quantity" value={quantitySelected} onChange={quantitySelectedHandler}>
                {Array.from({ length: 10 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
            </select>
          </div>
          <Button type="submit" className="addToCartButton">+Add</Button>
        </form>
  
  )
}

export default AddMealForm