import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";

import { CardOrder } from '../card-order/card-order';

import ordersFeedStyles from './orders-feed.module.css';


export const OrdersFeed = () => {

  const location = useLocation();
  const { orders } = useSelector(store => store.ws);

  return (
    <section>
      <ul className={`${ordersFeedStyles.cardList} custom-scroll`}>
        {orders.map(item => (
          <Link key={item._id}
            className={ordersFeedStyles.link}
            to={{
              pathname: `/feed/${item._id}`,
              state: { background: location },
            }}
          >
            <CardOrder card={item} />
          </Link>
        ))}
      </ul>
    </section>
  );
};