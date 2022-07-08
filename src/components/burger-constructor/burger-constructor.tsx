import { useState, useMemo, useRef, FC } from 'react';
import { useDrag, useDrop } from 'react-dnd';
//import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { ConstructorElement, CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSelector, useDispatch } from '../../services/types';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { postOrder, RESET_ORDER } from '../../services/actions/order';
import { addToConstructor, deleteIngredient, sortIngredient } from '../../services/actions/constructor';
import { Loader } from '../loader/loader';
import { ConstructorItems } from '../constructor-items/constructor-items';
import { OrderTotal } from '../order-total/order-total';

import burgerConstructorStyles from './burger-constructor.module.css';
import { TIngredient } from '../../services/types/data';

const BurgerConstructor: FC = () => {

  return(
    <section className={`${burgerConstructorStyles.main} mt-25`}>
      <ConstructorItems />
      <OrderTotal />
    </section>
  );
}

export default BurgerConstructor;