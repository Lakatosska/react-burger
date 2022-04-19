import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import appStyles from './app.module.css';
import { DataContext } from '../../services/app-context';
import { BASEURL, checkResponse } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';

const App = () => {
  //const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
    },
    [dispatch]
  ); 

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