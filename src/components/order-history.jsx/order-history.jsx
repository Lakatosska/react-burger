import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";

import { CardOrder } from '../card-order/card-order';

import orderHistoryStyles from './order-history.module.css';

export const OrderHistory = () => {

  const location = useLocation();
  const { orders } = useSelector(store => store.ws);

  return (
    <ul className={`${orderHistoryStyles.cardList} custom-scroll`}>
        {orders !== 0 && orders?.map(item => ( 
          <Link key={item._id}
            className={orderHistoryStyles.link}
            to={{
              pathname: `/profile/orders/${item._id}`,
              state: { background: location },
            }}
          >
            <CardOrder card={item} />
          </Link>
        ))}
      </ul>
  )
}