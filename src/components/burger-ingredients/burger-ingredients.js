import React from "react";

import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import burgerIngredientsStyles from './burger-ingredients.module.css';



const BurgerTabs = () => {
  const [current, setCurrent] = React.useState('one')
    return (
      <>
        <div style={{ display: 'flex' }}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </>
    );
}

const Card = () => {
  return(
    <li className={burgerIngredientsStyles.card}>
      <Counter />
      <img />
      <div>
        <p>20</p>
        <CurrencyIcon type="primary" />
      </div>
      <p>Краторная булка</p>
      
    </li>
  );
}

const BurgerIngredients = ({ data }) => {
  return(
    <>
      <h1>Соберите бургер</h1>
      <BurgerTabs />
      <h2>Булки</h2>
      <Card />
    </>
  );
}

export default BurgerIngredients;