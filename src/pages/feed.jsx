import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { OrdersFeed } from '../components/orders-feed/orders-feed';
import { OrdersStatus } from '../components/orders-status/orders-status';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from '../services/actions/wsActions'

import styles from './style.module.css';

export const FeedPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START
    });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    }
  }, []);


  return (
    <main className={styles.feedMain}>
      <h2 className="text text_type_main-large mt-10 mb-5">Лента заказов</h2>
      <div className={styles.feed}>
        <OrdersFeed />
        <OrdersStatus />
      </div>
    </main>
  );
};