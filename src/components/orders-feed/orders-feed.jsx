import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { CardOrder } from '../card-order/card-order';

import ordersFeedStyles from './orders-feed.module.css';


export const OrdersFeed = () => {

  const { orders } = useSelector(store => store.ws);

  return (
    <section>
      <ul className={`${ordersFeedStyles.cardList} custom-scroll`}>
        {orders.map(item => (
            
          <CardOrder card={item} key={item._id}/>
            
        ))}
      </ul>
    </section>
  );
};