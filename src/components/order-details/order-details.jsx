import React from 'react';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import orderDetailsStyles from './order-details.module.css';

import orderDoneImg from '../../images/order-done.png'

const OrderDetails = () => {
  return(
    <div className={`${orderDetailsStyles.container} pt-30`}>
      <h1 className='text text_type_digits-large mb-8'>034536</h1>
      <h2 className='text text_type_main-medium mb-15'>Идентификатор заказа</h2>
      <img src={orderDoneImg} alt='значок заказ принят'/>
      <span className='text text_type_main-default mt-15 mb-2'>Ваш заказ начали готовить</span>
      <span className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</span>     
    </div>
  );
}

export default OrderDetails;