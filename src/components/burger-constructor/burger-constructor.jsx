import React from "react";

import { ConstructorElement, CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import burgerConstructorStyles from './burger-constructor.module.css';

import { data } from '../../utils/data.js';
import { cardPropTypes } from '../../utils/prop-types';


const ConstructorItem = ({ cardData }) => {
  const { image, price, name } = cardData;
  return(
    <div 
      className={burgerConstructorStyles.item}>
        <DragIcon type="primary"/>
        <ConstructorElement
          text={name}
          price={price}
          thumbnail={image}
        />
    </div> 
  )
}

ConstructorItem.propTypes = {
  cardData: cardPropTypes.isRequired,
};


const ConstructorItems = () => {

  const bunData = data.filter(item => item.type === 'bun');
  const sauceMainData = data.filter(item => item.type !== 'bun');

  return (
    <ul className={burgerConstructorStyles.items}>
      <li className='ml-5'>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bunData[0].name + ' (верх)'}
          price={bunData[0].price}
          thumbnail={bunData[0].image}
        />
      </li>
      <li className={burgerConstructorStyles.items}>
        {sauceMainData.map(item => (
        <ConstructorItem key={item._id} cardData={item}/>
        ))}
      </li>
      <li className='ml-5'>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bunData[0].name + ' (низ)'}
          price={bunData[0].price}
          thumbnail={bunData[0].image}
        />
      </li>
    </ul>
  );
}

const OrderTotal = () => {
  const total = data.reduce((acc, item) => acc + item.price, 0)
  return(
    <div className={`${burgerConstructorStyles.order} mt-10`}>
      <div className={`${burgerConstructorStyles.price} mr-10`}>
        <span className="text text_type_digits-medium mr-4">{total}</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
}

const BurgerConstructor = () => {
  return(
    <section className={`${burgerConstructorStyles.main} mt-25`}>
      <ConstructorItems />
      <OrderTotal />
    </section>
  );
}

export default BurgerConstructor;