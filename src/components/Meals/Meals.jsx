import React from 'react'
import "./Meals.css";

const Meals = (props) => {
  return (
    <li id={props.meal.id} className='meal'>
        <h3>{props.meal.name}</h3>
        <p>{props.meal.description}</p>
        <h3 className='price'>{props.meal.price}</h3>
    </li>
  )
}

export default Meals