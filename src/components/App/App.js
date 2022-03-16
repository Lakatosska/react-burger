import React from "react";

import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

const App = () => {
  return(
    <>
      <AppHeader />
      <BurgerIngredients />
      <BurgerConstructor />
    </>
  );
}

export default App;