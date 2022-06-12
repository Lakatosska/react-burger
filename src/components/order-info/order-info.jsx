import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from '../../services/actions/wsActions';

import orderInfoStyles from './order-info.module.css';

const icons = [
  "https://code.s3.yandex.net/react/code/bun-02-mobile.png", 
  "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
  "https://code.s3.yandex.net/react/code/meat-02-mobile.png"
  ]

export const OrderInfo = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START
    });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    }
  }, []);

  const { orders } = useSelector(store => store.ws);
  const { ingredients } = useSelector(store => store.ingredients);

  const currentOrder = orders.find(order => order._id === id);
  if (!currentOrder) return null;
  const { name, number, status, createdAt, ingredients: ingredientsId} = currentOrder;

  
  const orderedIngredients = ingredientsId.filter(ingredient => ingredient != null).map(item => {
    return ingredients.find(el => el._id === item);
   })

   console.log(orderedIngredients)


  return (
    <main className={orderInfoStyles.main}>
      <div>
        <h2 className={`${orderInfoStyles.number} text text_type_digits-default`}>#{number}</h2>
        <p className={"text text_type_main-medium mt-10 mb-3"}>{name}</p>
        <p className={orderInfoStyles.status}>{status}</p>
      </div>

      <div className='mt-15 mb-10'>
        <p className="text text_type_main-medium mb-6">Состав:</p>

        <div className={orderInfoStyles.table}>
          <article className={`${orderInfoStyles.tableItem} mb-4`}>
            <img src={icons[0]} className={orderInfoStyles.icon}/>

            <p className="text text_type_main-default mr-4 ml-4">{orderedIngredients[0].name}</p>

            <div className={orderInfoStyles.quantity}>
              <p className="text text_type_digits-default mr-2">2</p>
              <p className="text text_type_digits-default mr-2">x 20</p>
              <CurrencyIcon type="primary" />
            </div>
          </article>

          <article className={orderInfoStyles.tableItem}>
            <img src={icons[2]} className={orderInfoStyles.icon}/>

            <p className="text text_type_main-default mr-4 ml-4">{orderedIngredients[1].name}</p>

            <div className={orderInfoStyles.quantity}>
              <p className="text text_type_digits-default mr-2">1</p>
              <p className="text text_type_digits-default mr-2">x 300</p>
              <CurrencyIcon type="primary" />
            </div>
          </article>

        </div>
      </div>

      <div className={orderInfoStyles.figures}>
        <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>

        <div className={`${orderInfoStyles.price} ml-6`}>
          <p className="text text_type_digits-default mr-2">510</p>
          <CurrencyIcon type="primary" />
        </div>

      </div>
    </main>
  )
}