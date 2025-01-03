import { useState } from "react";
import Body from "./components/Body";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";

import { MealsContextProvider } from "./store/meals-context";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const [modalOn, setModalOn] = useState(false);
  const closeModalHandler = () => {
    setModalOn(false);
  };
  const showCartModalHandler = () => {
    setModalOn(true);
  };
  return (
    <MealsContextProvider>
      <CartContextProvider>
        {modalOn && <Cart closeModal={closeModalHandler} />}
        <Header showCartModal={showCartModalHandler} />
        <Body />
      </CartContextProvider>
    </MealsContextProvider>
  );
}

export default App;
