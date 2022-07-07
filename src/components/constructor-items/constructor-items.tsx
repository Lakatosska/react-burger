//import { useSelector, useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { ConstructorElement, CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from '../../services/types';
import { addToConstructor, deleteIngredient, sortIngredient } from '../../services/actions/constructor';
import { ConstructorItem } from '../constructor-item/constructor-item';
import { TIngredient } from '../../services/types/data';
import burgerConstructorStyles from '../burger-constructor/burger-constructor.module.css';

export const ConstructorItems = () => {

  const dispatch = useDispatch();
  const { constructorItems, bun } = useSelector(store => store.constructorItems);

  const [, dropTarget] = useDrop(() => ({
    accept: 'ingredient',
    drop: (item: TIngredient) => dispatch(addToConstructor(item)),
  }));

  return (
    <ul className={`${burgerConstructorStyles.items} pl-4`} ref={dropTarget}>
      <li className={`${burgerConstructorStyles.list} ml-5`}>
        {bun
        ? 
          <ConstructorElement
            type='top'
            isLocked={true}
            text={bun.name + ' (верх)'}
            price={bun.price}
            thumbnail={bun.image}
          />
          : ''}
      </li>
      
      <li className={`${burgerConstructorStyles.list} ${burgerConstructorStyles.window} custom-scroll`}>
        {constructorItems.length > 0 
        ? (
            constructorItems.map((item, index) => {
              return (
                <ConstructorItem
                  cardData={item}
                  key={item.id}
                  index={index}
                />
              );
            })
          )
        : ''}
      </li>
      
      <li className={`${burgerConstructorStyles.list} ml-5`}>
        {bun
        ? 
          <ConstructorElement
            type='bottom'
            isLocked={true}
            text={bun.name + ' (низ)'}
            price={bun.price}
            thumbnail={bun.image}
        />
        : ''}
      </li>
    </ul>
  );
}