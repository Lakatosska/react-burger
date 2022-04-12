import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import appStyles from './app.module.css';
import { DataContext } from '../../services/app-context';

const BASEURL= 'https://norma.nomoreparties.space/api';

function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASEURL}/ingredients`)
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
        <DataContext.Provider value={data}>
          <BurgerIngredients />
          <BurgerConstructor /> 
        </DataContext.Provider>
      </main>
    </div>
  );
}

export default App;

/*
return(
    <div className={appStyles.app}>
      <AppHeader />
      
      <main className={appStyles.main}>
        <DataContext.Provider value={data}>
          <BurgerIngredients ingredients={data} />
          <BurgerConstructor ingredients={data} /> 
        </DataContext.Provider>
      </main>
    </div>
  );
*/

