import React, { useContext } from 'react'
import MealsContext from '../../store/meals-context'
import Meals from './Meals';
import "./MealsList.css";

const MealsList = () => {
    const meals=useContext(MealsContext);
  return (
    <div className='meals'>
        <ul>
            {
                meals.map((meal)=>
                    <Meals key={meal.id} meal={meal}></Meals>
                )
            }
        </ul>
    </div>
  )
}

export default MealsList