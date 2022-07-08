import { useState, useMemo, FC } from 'react';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import burgerIngredientsStyles from '../burger-ingredients/burger-ingredients.module.css';
//import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_MODAL } from '../../services/actions/currentIngredient';
import { getCurrentIngredient } from '../../services/actions/currentIngredient';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/types';
import { TIngredient, TType } from '../../services/types/data';
import { Card } from '../card/card';


interface IMenuListProps {
  type: TType;
}

export const MenuList: FC<IMenuListProps> = ({ type }) => {

  const { constructorItems, bun } = useSelector(store => store.constructorItems);
  const { ingredients } = useSelector(store => store.ingredients);
  const typeData = ingredients.filter(item => item.type === type);

  return(
    <div className={`${burgerIngredientsStyles.menuItems}`}>
      {typeData.map(item => (
        <Card key={item._id} cardData={item} />
      ))}
    </div>
  );
}