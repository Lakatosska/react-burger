import { OrderInfo } from '../components/order-info/order-info';
import styles from './style.module.css';

export const OrderPage = () => {

  return (
    <main className={`${styles.order} mt-30`}>
      <OrderInfo />
    </main>
  );
};