import React from "react";

import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import burgerIngredientsStyles from './burger-ingredients.module.css';

import bun02 from '../../images/bun-02.png'



const BurgerTabs = () => {
  const [current, setCurrent] = React.useState('one')
    return (
      <>
        <div style={{ display: 'flex' }}>
          <Tab value='one' active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value='two' active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value='three' active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </>
    );
}

const Card = ({ image, price, name }) => {
  return(
    <article className={burgerIngredientsStyles.card}>
      
      <img src={bun02} alt={name} className='ml-4 mr-4 mb-1'/>
      <div className={`${burgerIngredientsStyles.priceItem} mt-1 mb-1`}>
        <span className='mr-1'>{price}20</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={burgerIngredientsStyles.name}>{name}Краторная булка</span>
      <Counter count={1} size="default" />
    </article>
  );
}


const BurgerIngredients = ({ data }) => {
  return(
    <div className={burgerIngredientsStyles.main}>
      <h1>Соберите бургер</h1>
      <BurgerTabs />
      <ul className={burgerIngredientsStyles.menuList}>
        <li>
          <h2>Булки</h2>
          <div className={burgerIngredientsStyles.menuItems}>
            <Card />
            <Card />
          </div>
        </li>
        <li>
          <h2>Соусы</h2>
          <div className={burgerIngredientsStyles.menuItems}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </li>
        <li>
          <h2>Начинки</h2>
          <div className={burgerIngredientsStyles.menuItems}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BurgerIngredients;