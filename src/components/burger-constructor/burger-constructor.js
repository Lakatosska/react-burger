import React from "react";

import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import bun02 from '../../images/bun-02.png';
import icon from '../../images/burger-constructor_icon.svg';

import burgerConstructorStyles from './burger-constructor.module.css';

const ConstructorItems = () => {
  return (
    <ul className={burgerConstructorStyles.items}>
      <li className={burgerConstructorStyles.item}>
        <img src={icon} alt='иконка меню' className={`${burgerConstructorStyles.icon} mr-2`}/>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          //thumbnail={img}
          thumbnail={bun02}
        />
      </li>
      <li className={burgerConstructorStyles.item}>
        <img src={icon} alt='иконка меню' className={`${burgerConstructorStyles.icon} mr-2`}/>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          //thumbnail={img}
          thumbnail={bun02}
        />
      </li>
      <li className={burgerConstructorStyles.item}>
        <img src={icon} alt='иконка меню' className={`${burgerConstructorStyles.icon} mr-2`}/>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          //thumbnail={img}
          thumbnail={bun02}
        />
      </li>
    
    </ul>
  );
}


const Order = () => {
  return(
    <div className={`${burgerConstructorStyles.order} mt-10`}>
      <div className={`${burgerConstructorStyles.price} mr-10`}>
        <span className="text text_type_digits-medium mr-4">610</span>
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
      <Order />
    </section>
  );
}

export default BurgerConstructor;