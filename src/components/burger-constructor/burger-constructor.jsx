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
import { ADD_INGREDIENT, DELETE_INGREDIENT, REPLACE_BUN } from '../../services/actions/constructor';
import { useDrop } from 'react-dnd';


const ConstructorItem = ({ cardData }, index) => {
  const { image, price, name, _id } = cardData;
  return(
    <div 
      className={burgerConstructorStyles.item}>
        <DragIcon type="primary"/>
        <ConstructorElement
          text={name}
          price={price}
          thumbnail={image}
          _id={_id}
          index={index}
          //handleClose={() => deleteIngredient()}
        />
    </div> 
  )
}


const ConstructorItems = () => {

  //const ingredients = useSelector(store => store.ingredients.ingredients);
  //const bunData = ingredients.find(item => item.type === 'bun');
  const { constructorItems, constructorLayout } = useSelector(store => store.constructorItems);
  console.log(constructorItems)
  console.log(constructorLayout)

  const bunData = constructorItems.find(item => item.type === 'bun');

  const sauceMainData = constructorItems.filter(item => item.type !== 'bun');

  const dispatch = useDispatch();

  const onDropHandler = (item) => {
    console.log(item)
    const isBun = item.ingType === 'bun';
    dispatch({ 
      type: isBun ? REPLACE_BUN : ADD_INGREDIENT, 
      id: item.id
    });
  };

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDropHandler(item);
    },
  });


  return (
    <ul className={`${burgerConstructorStyles.items} pl-4`} ref={dropTarget}>
      <li className={`${burgerConstructorStyles.list} ml-5`}>
        {bunData
        ? 
          <ConstructorElement
            type='top'
            isLocked={true}
            text={bunData.name + ' (верх)'}
            price={bunData.price}
            thumbnail={bunData.image}
            key={bunData._id}
          />
          : ''}
      </li>
      
      <li className={`${burgerConstructorStyles.list} ${burgerConstructorStyles.window} custom-scroll`}>
        {sauceMainData.map(item => (
        <ConstructorItem key={item._id} cardData={item}/>
        ))}
      </li>
      

      <li className={`${burgerConstructorStyles.list} ml-5`}>
        {bunData
        ? 
          <ConstructorElement
            type='bottom'
            isLocked={true}
            text={bunData.name + ' (низ)'}
            price={bunData.price}
            thumbnail={bunData.image}
            //key={bunData._id}
            key={bunData._id + 'bottom'}
        />
        : ''}
      </li>
    </ul>
  );
}


const OrderTotal = () => {

  const ingredients = useSelector(store => store.ingredients.ingredients);
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

  const bunData = ingredients.find(item => item.type === 'bun');
  const sauceMainData = ingredients.filter(item => item.type !== 'bun');
  
  const bunDataPrice = bunData ? bunData.price*2 : 0;

  const total = useMemo(
    () => 
    sauceMainData.reduce((acc, item) => acc + item.price, 0) + bunDataPrice,
  [sauceMainData, bunDataPrice]
  )

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

  //const ingredients = useContext(DataContext);
  //const ingredients = useSelector(store => store.ingredients.ingredients);

  return(
    <section className={`${burgerConstructorStyles.main} mt-25`}>
      <ConstructorItems />
      <OrderTotal />
    </section>
  );
}


export default BurgerConstructor;

/* 24.04 14:30
const ConstructorItem = ({ cardData }) => {

  const { image, price, name } = cardData;

  const dispatch = useDispatch();

  const onDropHandler = (item) => {
    console.log(item)
    dispatch({ 
      type: ADD_INGREDIENT, 
      ingredients: item 
    });
  };

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDropHandler(item);
    },
  });

  const deleteIngredient = () => {
    dispatch({
      type: DELETE_INGREDIENT,
      key: cardData._id
    })
  }


  return(
    <div 
      className={burgerConstructorStyles.item}
      ref={dropTarget}>
        <DragIcon type="primary"/>
        <ConstructorElement
          text={name}
          price={price}
          thumbnail={image}
          handleClose={() => deleteIngredient()}
        />
    </div> 
  )
}

ConstructorItem.propTypes = {
  cardData: cardPropTypes.isRequired,
};


const ConstructorItems = () => {

  const ingredients = useSelector(store => store.ingredients.ingredients);
  const constructorItems = useSelector(store => store.constructorItems.constructorItems);
  console.log(constructorItems)
  const bunData = useSelector(store => store.ingredients.bunIngredients);
  //const bunData = ingredients.find(item => item.type === 'bun');
  const sauceMainData = ingredients.filter(item => item.type !== 'bun');

  const dispatch = useDispatch();

  const onDropHandler = (item) => {
    console.log(item)
    dispatch({ 
      type: ADD_INGREDIENT, 
      ingredients: item 
    });
  };

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDropHandler(item);
    },
  });


  return (
    <ul className={`${burgerConstructorStyles.items} pl-4`} ref={dropTarget}>
      <li className={`${burgerConstructorStyles.list} ml-5`}>
        {bunData
        ? 
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bunData.name + ' (верх)'}
            price={bunData.price}
            thumbnail={bunData.image}
            key={bunData._id}
          />
          : ''}
      </li>
      
      <li className={`${burgerConstructorStyles.list} ${burgerConstructorStyles.window} custom-scroll`}>
        {constructorItems.map(item => (
        <ConstructorItem key={item._id} cardData={item}/>
        ))}
      </li>
      

      <li className={`${burgerConstructorStyles.list} ml-5`}>
        {bunData
        ? 
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bunData.name + ' (низ)'}
            price={bunData.price}
            thumbnail={bunData.image}
            key={bunData._id}
        />
        : ''}
      </li>
    </ul>
  );
}


const OrderTotal = () => {

  const ingredients = useSelector(store => store.ingredients.ingredients);

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

  const bunData = ingredients.find(item => item.type === 'bun');
  const sauceMainData = ingredients.filter(item => item.type !== 'bun');
  
  const bunDataPrice = bunData ? bunData.price*2 : 0;

  const total = useMemo(
    () => 
    sauceMainData.reduce((acc, item) => acc + item.price, 0) + bunDataPrice,
  [sauceMainData, bunDataPrice]
  )

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

  //const ingredients = useContext(DataContext);
  //const ingredients = useSelector(store => store.ingredients.ingredients);

  return(
    <section className={`${burgerConstructorStyles.main} mt-25`}>
      <ConstructorItems />
      <OrderTotal />
    </section>
  );
}


export default BurgerConstructor;
*/