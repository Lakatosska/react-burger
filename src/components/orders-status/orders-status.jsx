import ordersStatusStyles from './orders-status.module.css';

export const OrdersStatus = () => {

  return (
    <section className={ordersStatusStyles.section}>
      <div>
        <div>
          <h3>Готовы:</h3>

        </div>

        <div>
          <h3>В работе:</h3>

        </div>
      </div>

      <div>
        <h3>Выполнено за все время:</h3>

      </div>

      <div>
        <h3>Выполнено за сегодня:</h3>

      </div>
    </section>
  
  );
};
