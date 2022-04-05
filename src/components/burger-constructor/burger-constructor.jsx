import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import { cardPropTypes } from '../../utils/prop-types';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details'


const ConstructorItem = ({ cardData }) => {
  const { image, price, name } = cardData;
  return(
    <div 
      className={burgerConstructorStyles.item}>
        <DragIcon type="primary"/>
        <ConstructorElement
          text={name}
          price={price}
          thumbnail={image}
        />
    </div> 
  )
}

ConstructorItem.propTypes = {
  cardData: cardPropTypes.isRequired,
};


const ConstructorItems = ({ ingredientData }) => {

  const bunData = ingredientData.find(item => item.type === 'bun');
  const sauceMainData = ingredientData.filter(item => item.type !== 'bun');

  return (
    <ul className={`${burgerConstructorStyles.items} pl-4`}>
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
        {sauceMainData.map(item => (
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

ConstructorItems.propTypes = {
  ingredientData: PropTypes.arrayOf(cardPropTypes).isRequired,
};


const OrderTotal = ({ ingredientData }) => {

  const [modalActive, setModalActive] = React.useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const modalOrder = (
    <Modal closing={closeModal}>
      <OrderDetails  />
    </Modal >
  );
  
  const total = React.useMemo(
    () => 
    ingredientData.reduce((acc, item) => acc + item.price, 0),
  [ingredientData]
  );


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

OrderTotal.propTypes = {
  ingredientData: PropTypes.arrayOf(cardPropTypes).isRequired,
};

const BurgerConstructor = ({ ingredients }) => {
  return(
    <section className={`${burgerConstructorStyles.main} mt-25`}>
      <ConstructorItems ingredientData={ingredients} />
      <OrderTotal ingredientData={ingredients} />
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(cardPropTypes).isRequired,
};

export default BurgerConstructor;