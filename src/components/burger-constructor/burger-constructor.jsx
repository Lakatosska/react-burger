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

import burgerConstructorStyles from './burger-constructor.module.css';


const ConstructorItem = ({ cardData, index }) => {

  const dispatch = useDispatch();

  const handleDeleteIngredient = (index) => {
    dispatch(deleteIngredient(index))
  }

  const [, dragRef] = useDrag({
    type: 'item',
    item: { index }  
  });

  const [, dropRef] = useDrop({
    accept: 'item',
    drop(dragObject) {
      if (dragObject.index === index) {
        return
      }
      dispatch(sortIngredient(dragObject.index, index))
    }
  })

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  return(
    <div 
      key={cardData.id}
      ref={dragDropRef}
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


const OrderTotal = () => {

  const { constructorItems, bun } = useSelector(store => store.constructorItems);
  const { order, orderRequest } = useSelector(store => store.order);
  const { isAuth } = useSelector(store => store.user);
  const orderItemsId = [bun, bun, ...constructorItems].map(el => el._id);

  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const openModal = () => {
    if (isAuth) {
      setModalActive(true);
      dispatch(postOrder(orderItemsId)); 
    } else {
      <Redirect to={{ pathname: '/login' }} />
    }// отправляем данные заказа
  };
 
  const closeModal = () => {
    setModalActive(false);
    dispatch({
      type: RESET_ORDER
    })
  };
  
  const modalOrder = (
    <Modal closing={closeModal} showModal={true}>
      <OrderDetails orderNumber={order}/>
    </Modal >
  );

  const handlerOrder = () => {
    if (isAuth) {
      openModal()
    } else {
      history.replace({ pathname: 'login' })
    }
  }

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
        <Button type="primary" size="large" 
                onClick={ handlerOrder }
            // делаем неактивной кнопку без булки и ингредиентов
            disabled={(bun && constructorItems.length) ? false : true}> 
          Оформить заказ
        </Button>
      </div>
      {orderRequest && <Loader />}
      {order && modalActive && modalOrder}
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