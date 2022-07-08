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

interface ICardProps {
  cardData: TIngredient;
  //count: number;
}

export const Card: FC<ICardProps> = ({ cardData }) => {
  const { image, price, name, _id: id, type } = cardData;

  const { constructorItems, bun } = useSelector(store => store.constructorItems);

  const location = useLocation();
  
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: cardData,
  });

  const counter = useMemo(() => {
    if (cardData.type !== 'bun') {
      return (constructorItems.filter((item) => item._id === cardData._id).length)
    } else {
      return (bun === cardData._id ? 2 : 0)
    }
  }, [constructorItems, bun]
  );

  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalActive(true);
    dispatch(getCurrentIngredient(cardData))    
  };

  const closeModal = () => {
    setModalActive(false);
    dispatch({
      type: CLOSE_MODAL
    }); 
  };

  const modalIngredients = (
    <Modal title='Детали ингредиента' closing={closeModal}>
      <IngredientDetails/>
    </Modal >
  );

  return(
    <>
      <article className={burgerIngredientsStyles.card} 
        onClick={openModal}
        ref={dragRef}
      >
        <Link className={burgerIngredientsStyles.link}  
            to={{ pathname: `/ingredients/${id}`, state: { background: location } }}>
          {(counter > 0) && (<Counter count={counter} size="default" />)}
          <img src={image} alt={name} className='ml-4 mr-4 mb-1'/>
          <div className={`${burgerIngredientsStyles.priceItem} mt-1 mb-1`}>
            <span className='text text_type_digits-default mr-1'>{price}</span>
            <CurrencyIcon type='primary' />
          </div>
          <span className={burgerIngredientsStyles.name}>{name}</span>
        </Link>
      </article>
      {modalActive && modalIngredients}
    </>
  );
};