import React from 'react';
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


const ConstructorItems = (props) => {

  const bunData = props.ingredients.filter(item => item.type === 'bun');
  const sauceMainData = props.ingredients.filter(item => item.type !== 'bun');

  return (
    <ul className={burgerConstructorStyles.items}>
      <li className={`${burgerConstructorStyles.list} ml-3`}>
        {bunData.map(item => (
          <ConstructorElement
          type="top"
          isLocked={true}
          text={item.name + ' (верх)'}
          price={item.price}
          thumbnail={item.image}
          key={item._id}
        />
        ))}
      </li>
      
      <li className={`${burgerConstructorStyles.list} ${burgerConstructorStyles.window} custom-scroll`}>
        {sauceMainData.map(item => (
        <ConstructorItem key={item._id} cardData={item}/>
        ))}
      </li>

      <li className={`${burgerConstructorStyles.list} ml-3`}>
        {bunData.map(item => (
          <ConstructorElement
          type="bottom"
          isLocked={true}
          text={item.name + ' (низ)'}
          price={item.price}
          thumbnail={item.image}
          key={item._id}
        />
        ))}
      </li>
      
    </ul>
  );
}

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

export default BurgerConstructor;