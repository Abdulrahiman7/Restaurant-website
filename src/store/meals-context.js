import React, { createContext } from 'react'

const MealsContext = createContext([]);
const meals = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      price: 12.99,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Traditional pizza topped with fresh mozzarella, tomatoes, and basil.",
      price: 10.99,
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
      price: 8.99,
    },
    {
      id: 4,
      name: "Grilled Salmon",
      description: "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
      price: 18.99,
    },
    {
      id: 5,
      name: "Chicken Tikka Masala",
      description: "Tender chicken pieces marinated in spices and yogurt, served in a creamy tomato sauce.",
      price: 14.99,
    },
    {
      id: 6,
      name: "Beef Tacos",
      description: "Soft tortillas filled with seasoned beef, topped with fresh salsa and avocado.",
      price: 9.99,
    },
    {
      id: 7,
      name: "Vegetable Stir-Fry",
      description: "A medley of seasonal vegetables stir-fried in a savory sauce, served with rice.",
      price: 11.99,
    },
    {
      id: 8,
      name: "Pancakes with Maple Syrup",
      description: "Fluffy pancakes served with butter and drizzled with pure maple syrup.",
      price: 7.99,
    },
    {
      id: 9,
      name: "Shrimp Scampi",
      description: "Sautéed shrimp in a garlic butter sauce, served over linguine pasta.",
      price: 16.99,
    },
    {
      id: 10,
      name: "Chocolate Lava Cake",
      description: "Decadent chocolate cake with a molten center, served with vanilla ice cream.",
      price: 6.99,
    },
  ];
  

export const MealsContextProvider=(props)=>{
    return(
        <MealsContext.Provider value={meals}>{props.children}</MealsContext.Provider>
    )
}

export default MealsContext