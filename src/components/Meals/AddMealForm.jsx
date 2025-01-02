import React, { useState } from 'react'
import Button from '../UI/Button'
import "./AddMealForm.css";
const AddMealForm = () => {
  const [quantitySelected, setQuantitySelected]=useState(1);
  const quantitySelectedHandler=(event)=>{
    setQuantitySelected(event.target.value);
  }
  const formSubmitHandler=(event)=>{

  }
  return (
  
        <form onSubmit={formSubmitHandler} className='addToCartForm'>
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