import React, { useContext } from 'react'
import MealsContext from '../../store/meals-context'
import Meals from './Meals';
import "./MealsList.css";
import Card from '../UI/Card';

const MealsList = () => {
    const meals=useContext(MealsContext);
  return (
    <div className='meals'>
        <Card className="meals">
        <ul>
            {
                meals.map((meal)=>
                    <Meals key={meal.id} meal={meal}></Meals>
                )
            }
        </ul>
        </Card>
    </div>
  )
}

export default MealsList