
import Body from "./components/Body";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";

import { MealsContextProvider } from "./store/meals-context";


function App() {
  return (
  
    <MealsContextProvider>
      <Cart />
      <Header />
      <Body />
    </MealsContextProvider>

 
   
  );
}

export default App;
