import Body from "./components/Body";
import Header from "./components/Layout/Header";

import { MealsContextProvider } from "./store/meals-context";

function App() {
  return (
    <MealsContextProvider>
      <Header />
      <Body />
      
    </MealsContextProvider>
   
  );
}

export default App;
