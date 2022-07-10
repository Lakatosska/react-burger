import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from '../../services/types';
import { CardOrder } from '../card-order/card-order';
import { Loader } from '../loader/loader';
import ordersFeedStyles from './orders-feed.module.css';

export const OrdersFeed: FC = () => {

  const location = useLocation();
  const { orders } = useSelector(store => store.ws);

  if (!orders) {
    return <Loader />;
  }

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