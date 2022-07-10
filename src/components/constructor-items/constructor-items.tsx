//import { useSelector, useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { ConstructorElement, CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from '../../services/types';
import { addToConstructor, deleteIngredient, sortIngredient } from '../../services/actions/constructor';
import { ConstructorItem } from '../constructor-item/constructor-item';
import { TIngredient } from '../../services/types/data';
import construtorItemsStyles from './constructor-items.module.css';

export const ConstructorItems = () => {

  const dispatch = useDispatch();
  const { constructorItems, bun } = useSelector(store => store.constructorItems);

  //const constructs = useSelector(store => store.constructorItems);
  const { ingredients } = useSelector(store => store.ingredients);

  //const ingredientsBun = ingredients.filter(item => item._id === bun);


  const [, dropTarget] = useDrop(() => ({
    accept: 'ingredient',
    drop: (item: TIngredient) => dispatch(addToConstructor(item)),
  }));

  return (
    <ul className={`${construtorItemsStyles.main} pl-4`} ref={dropTarget}>
      <li className={`${construtorItemsStyles.list} ml-5`}>
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
      
      <li className={`${construtorItemsStyles.list} ${construtorItemsStyles.window} custom-scroll`}>
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
      
      <li className={`${construtorItemsStyles.list} ml-5`}>
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