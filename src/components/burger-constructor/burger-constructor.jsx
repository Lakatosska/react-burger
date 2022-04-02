import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import { cardPropTypes } from '../../utils/prop-types';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details'
import bun02 from '../../images/bun-02.png'


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


const ConstructorItems = (props) => {

  const sauceMainData = props.ingredients.filter(item => item.type !== 'bun');

  return (
    <ul className={`${burgerConstructorStyles.items} pl-4`}>
      <li className={`${burgerConstructorStyles.list} ml-6`}>
          <ConstructorElement
          type="top"
          isLocked={true}
          text='Краторная булка N-200i (верх)'
          price={20}
          thumbnail={bun02}
          />
      </li>
      
      <li className={`${burgerConstructorStyles.list} ${burgerConstructorStyles.window} custom-scroll`}>
        {sauceMainData.map(item => (
        <ConstructorItem key={item._id} cardData={item}/>
        ))}
      </li>

      <li className={`${burgerConstructorStyles.list} ml-6`}>
          <ConstructorElement
          type="bottom"
          isLocked={true}
          text='Краторная булка N-200i (низ)'
          price={20}
          thumbnail={bun02}
        />
      </li>
      
    </ul>
  );
}

ConstructorItems.propTypes = {
  ingredients: PropTypes.arrayOf(cardPropTypes).isRequired,
};

const OrderTotal = (props) => {

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

  const total = props.ingredients.reduce((acc, item) => acc + item.price, 0);

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

const BurgerConstructor = (props) => {
  return(
    <section className={`${burgerConstructorStyles.main} mt-25`}>
      <ConstructorItems ingredients={props.ingredients} />
      <OrderTotal ingredients={props.ingredients} />
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(cardPropTypes).isRequired,
};

export default BurgerConstructor;