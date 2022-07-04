//import { useSelector } from 'react-redux';
import { useSelector } from '../../services/types';
import ordersStatusStyles from './orders-status.module.css';

export const OrdersStatus = () => {

  const { orders, total, totalToday } = useSelector(store => store.ws);

  const ordersDone = orders.map(item => {
    if (item.status === 'done') {
      return (
        <li key={item._id} className="text text_type_digits-default mb-2">
          {item.number}
        </li>
      )
    }
  })

  const ordersInWork = orders.map(item => {
    if (item.status === 'pending') {
      return (
        <li key={item._id} className="text text_type_digits-default mb-2">
          {item.number}
        </li>
      )
    }
  })

  return (
    <section className={ordersStatusStyles.section}>
      <div className={`${ordersStatusStyles.status} mb-15`}>
        <div>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <ul className={ordersStatusStyles.doneList}>
            {ordersDone}
          </ul>
        </div>

        <div>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <ul className={ordersStatusStyles.inWorkList}>
            {ordersInWork}
          </ul>
        </div>
      </div>

      <div className="mb-15">
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className="text text_type_digits-large">{total}</p>
      </div>

      <div>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className="text text_type_digits-large">{totalToday}</p>
      </div>
    </section>
  );
};