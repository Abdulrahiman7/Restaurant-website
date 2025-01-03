import { createContext, useContext, useState } from "react"
import MealsContext from "./meals-context";

const CartContext=createContext();


export const CartContextProvider=(props)=>{
    const [cartItems, setCartItems]=useState([]);
const [totalPrice, setTotalPrice]=useState(0);
const {meals}=useContext(MealsContext);


 const addToCartHandler=(item)=>{
    const findMeal=meals.find(ele => ele.id === item.id);
    item.name=findMeal.name;

    setCartItems((prevItems)=> [...prevItems, item]);
    setTotalPrice((prevPrice)=> prevPrice+= (+item.price * +item.quantity));
}

 const removeItemHandler=(item)=>{
    setCartItems((prevItems)=> prevItems.filter((prevItem)=>prevItem.id !== item.id));
    setTotalPrice((prevPrice)=> prevPrice -= (+item.price * +item.quantity));
}

const CartDetails={
    items:cartItems,
    addToCart:addToCartHandler,
    removeCartItem:removeItemHandler,
    totalPrice:totalPrice
}

    return(<CartContext.Provider value={CartDetails}>{props.children}</CartContext.Provider>)
}


 export default CartContext;