import { FC } from 'react';
import { ConstructorItems } from '../constructor-items/constructor-items';
import { OrderTotal } from '../order-total/order-total';
import burgerConstructorStyles from './burger-constructor.module.css';

export const BurgerConstructor: FC = () => {

  return(
    <section className={`${burgerConstructorStyles.main} mt-25`}>
      <ConstructorItems />
      <OrderTotal />
    </section>
  );
};