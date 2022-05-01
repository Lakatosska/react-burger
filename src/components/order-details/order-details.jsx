import orderDetailsStyles from './order-details.module.css';
import orderDoneImg from '../../images/order-done.png';
import { useSelector } from 'react-redux';

const OrderDetails = () => {

  const orderNumber = useSelector(store => store.order.order);

  return(
    <div className={`${orderDetailsStyles.container} pt-15`}>
      <h1 className='text text_type_digits-large mb-10'>{orderNumber}</h1>
      <h2 className='text text_type_main-medium mb-15'>Идентификатор заказа</h2>
      <img src={orderDoneImg} alt='значок заказ принят'/>
      <span className='text text_type_main-default mt-15 mb-3'>Ваш заказ начали готовить</span>
      <span className='text text_type_main-default text_color_inactive mb-30'>Дождитесь готовности на орбитальной станции</span>     
    </div>
  );
}

export default OrderDetails;