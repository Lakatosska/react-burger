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
import { TIngredient } from '../../services/types/data';

import burgerConstructorStyles from '../burger-constructor/burger-constructor.module.css';


interface IConstructorItemProps {
  cardData: TIngredient;
  index: number;
};

export const ConstructorItem: FC<IConstructorItemProps> = ({ cardData, index }) => {

  const dispatch = useDispatch();

  const handleDeleteIngredient = (index: number) => {
    dispatch(deleteIngredient(index))
  }

  const [, dragRef] = useDrag({
    type: 'item',
    item: { index }  
  });

  const [, dropRef] = useDrop({
    accept: 'item',
    drop(dragObject: {index: number}) {
      if (dragObject.index === index) {
        return
      }
      dispatch(sortIngredient(dragObject.index, index))
    }
  })

  const ref: any = useRef<HTMLLIElement>(null);
  dragRef(dropRef(ref));

  return(
    <div 
      key={cardData.id}
      ref={ref}
      className={burgerConstructorStyles.item}>
        <DragIcon type="primary"/>
        <ConstructorElement
          text={cardData.name}
          price={cardData.price}
          thumbnail={cardData.image}
          handleClose={() => handleDeleteIngredient(index)}
        />
    </div> 
  )
}