import React from "react";

import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import burgerIngredientsStyles from './burger-ingredients.module.css';

import { data } from '../../utils/data.js';
import { cardPropTypes } from '../../utils/prop-types';


const BurgerTabs = () => {
  const [current, setCurrent] = React.useState('one')
    return (
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
    );
}

const Card = ({ cardData }) => {
  const { image, price, name } = cardData;
  return(
    <article className={burgerIngredientsStyles.card}>
      <Counter count={1} size="default" />
      <img src={image} alt={name} className='ml-4 mr-4 mb-1'/>
      <div className={`${burgerIngredientsStyles.priceItem} mt-1 mb-1`}>
        <span className='mr-1'>{price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={burgerIngredientsStyles.name}>{name}</span>
    </article>
  );
}

Card.propTypes = {
  cardData: cardPropTypes.isRequired,
};

const MenuList = (props) => {
  const typeData = data.filter(item => item.type === props.type);
  return(
    <ul className={`${burgerIngredientsStyles.menuItems} pl-4 pr-4`}>
      {typeData.map(item => (
        <Card key={item._id} cardData={item} />
      ))}
    </ul>
  );
}


const BurgerIngredients = () => {
  return(
    <section className={burgerIngredientsStyles.main}>
      <h1 className='mt-10 mb-5 text text_type_main-large'>Соберите бургер</h1>
      <BurgerTabs />
      <ul className={burgerIngredientsStyles.menu}>
        <li>
          <h2 className='text text_type_main-medium mt-10 mb-6'>Булки</h2>
          <MenuList type='bun' />
        </li>
        <li>
          <h2 className='text text_type_main-medium mt-10 mb-6'>Соусы</h2>
          <MenuList type='sauce' />
        </li>
        <li>
          <h2 className='text text_type_main-medium mt-10 mb-6'>Начинки</h2>
          <MenuList type='main' />
        </li>
      </ul>
    </section>
  );
}

export default BurgerIngredients;