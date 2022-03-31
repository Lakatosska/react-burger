import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import appStyles from './app.module.css';


function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const App = () => {
  const [data, setData] = useState([]);

  const baseUrl = 'https://norma.nomoreparties.space/api/ingredients';

  useEffect(() => {
    fetch(`${baseUrl}`)
    .then(checkResponse)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.log(err));
  }, []); // передаем пустой массив, чтобы запустить useEffect на момент первого рендера

  return(
    <div className={appStyles.app}>
      <AppHeader />
      
      <main className={appStyles.main}>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor ingredients={data} /> 
      </main>
    </div>
  );
}

export default App;


