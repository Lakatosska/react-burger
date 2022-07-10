import { useRef, FC, MutableRefObject } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from '../../services/types';
import { addToConstructor, deleteIngredient, sortIngredient } from '../../services/actions/constructor';
import { TIngredient } from '../../services/types/data';
import constructorItemStyles from './constructor-item.module.css';


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

  const ref: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  dragRef(dropRef(ref));

  return(
    <div 
      key={cardData.id}
      ref={ref}
      className={constructorItemStyles.item}>
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