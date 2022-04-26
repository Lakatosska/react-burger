import { useState, useMemo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import { cardPropTypes } from '../../utils/prop-types';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { PlaceOrderContext } from '../../services/burger-constructor-context';
import { DataContext } from '../../services/app-context';
import { BASEURL, checkResponse } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { postOrder } from '../../services/actions/order';
import { ADD_INGREDIENT, DELETE_INGREDIENT, REPLACE_BUN, addToConstructor } from '../../services/actions/constructor';
import { useDrag, useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';


const ConstructorItem = ({ cardData, index }) => {

  const dispatch = useDispatch();

   const deleteIngredient = (index) => {
    dispatch(deleteIngredient(index))
  };


  return(
    <div 
      key={cardData.id}
      className={burgerConstructorStyles.item}>
        <DragIcon type="primary"/>
        <ConstructorElement
          text={cardData.name}
          price={cardData.price}
          thumbnail={cardData.image}
          handleClose={() => deleteIngredient(index)}
        />
    </div> 
  )
}


const ConstructorItems = () => {

  const dispatch = useDispatch();
  const { constructorItems, bun } = useSelector(store => store.constructorItems);

  const [, dropTarget] = useDrop(() => ({
    accept: 'ingredient',
    drop: (item) => dispatch(addToConstructor(item)),
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
                  index={index}
                  key={item.id}
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


const OrderTotal = () => {

  const ingredients = useSelector(store => store.ingredients.ingredients);
  const { constructorItems, bun } = useSelector(store => store.constructorItems);

  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalActive(true);
    dispatch(postOrder(ingredients)); // отправляем данные заказа
  };

  const closeModal = () => {
    setModalActive(false);
  };
  
  const modalOrder = (
    <Modal closing={closeModal}>
        <OrderDetails  />
    </Modal >
  );

  const total = useMemo(() => {
    const bunPrice = bun ? bun.price*2 : 0;

    return (
      constructorItems.reduce((acc, item) => acc + item.price, 0) + bunPrice
    );
  }, [constructorItems, bun]);

  return(
    <>
      <div className={`${burgerConstructorStyles.order} mt-10`}>
        <div className={`${burgerConstructorStyles.price} mr-10`}>
          <span className="text text_type_digits-medium mr-4">{total}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
      {modalActive && modalOrder}
    </>
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