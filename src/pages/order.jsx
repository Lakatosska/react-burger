import { useParams } from 'react-router-dom';
import { OrderInfo } from '../components/order-info/order-info';
import styles from './style.module.css';

export const OrderPage = () => {

  const { id } = useParams();

  return (
    <main className={styles.order}>
      <OrderInfo id={ id }/>
    </main>
  );
};