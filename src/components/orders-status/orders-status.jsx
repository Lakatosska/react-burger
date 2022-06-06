import ordersStatusStyles from './orders-status.module.css';

export const OrdersStatus = () => {

  return (
    <section className={ordersStatusStyles.section}>
      <div className={`${ordersStatusStyles.status} mb-15`}>
        <div>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <ul className={ordersStatusStyles.doneList}>
            <li className="text text_type_digits-default">034533</li>
            <li className="text text_type_digits-default">034534</li>
            <li className="text text_type_digits-default">034535</li>
            <li className="text text_type_digits-default">034536</li>
          </ul>

        </div>

        <div>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <ul className={ordersStatusStyles.inWorkList}>
            <li className="text text_type_digits-default">034538</li>
            <li className="text text_type_digits-default">034541</li>
            <li className="text text_type_digits-default">034542</li>
          </ul>

        </div>
      </div>

      <div className="mb-15">
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className="text text_type_digits-large">28752</p>

      </div>

      <div>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className="text text_type_digits-large">138</p>

      </div>
    </section>
  
  );
};
