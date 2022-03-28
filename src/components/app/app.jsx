import React, { useEffect, useState } from "react";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import appStyles from './app.module.css';

// https://norma.nomoreparties.space/api/ingredients

const baseUrl = 'https://norma.nomoreparties.space/api/ingredients';

function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://norma.nomoreparties.space/api/ingredients')
    .then(checkResponse)
    .then((data) => {
      console.log(data);
    })
  }, [])

  return(
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;

