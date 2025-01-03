import React from 'react'
import "./Meals.css";

import AddMealForm from './AddMealForm';

const Meals = (props) => {
  return (
    <li id={props.meal.id} className='meal'>
        <div>
        <h3>{props.meal.name}</h3>
        <p>{props.meal.description}</p>
        <h3 className='price'>${props.meal.price}</h3>
        </div>
        <AddMealForm id={props.meal.id}></AddMealForm>
    </li>
  )
}

export default Meals