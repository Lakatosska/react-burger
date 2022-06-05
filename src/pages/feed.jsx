import { OrdersFeed } from '../components/orders-feed/orders-feed';
import { OrdersStatus } from '../components/orders-status/orders-status';

import styles from './style.module.css';

export const FeedPage = () => {

  return (
    <main>
      <h2>Лента заказов</h2>
      <div className={styles.feed}>
        <OrdersFeed />
        <OrdersStatus />
      </div>
    </main>
  );
};

/*
export const FeedPage = () => {

  return (
    <>
      <h2>Лента заказов</h2>
      <div className={feedStyles.main}>
        <section>
          <ul>
            <li>
              <div>
                <p>order number</p>
                <span>order time</span>
              </div>
              
              <p>order name</p>
              <div>
                <span>order icons</span>
                <div>
                  <p>order total</p>
                  <img>order currency icon</img>
                </div>
              </div>
            </li>
          </ul>
        </section>


        <section>
          <div>
            <div>
              <h3>Готовы:</h3>

            </div>

            <div>
              <h3>В работе:</h3>

            </div>
          </div>

          <div>
            <h3>Выполнено за сегодня:</h3>
          </div>

          <div>
            <h3>Выполнено за сегодня:</h3>
          </div>

        </section>
      </div>
    </>
  );
};
*/