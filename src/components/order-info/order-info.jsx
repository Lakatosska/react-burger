import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from '../../services/actions/wsActions';

import orderInfoStyles from './order-info.module.css';

export const OrderInfo = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START
    });
    return () => {
      dispatch({ 
        type: WS_CONNECTION_CLOSED 
      });
    }
  }, []);

  const { orders } = useSelector(store => store.ws);
  const { ingredients } = useSelector(store => store.ingredients);

  const currentOrder = orders.find(order => order._id === id);
  if (!currentOrder) return null;
  const { name, number, status, createdAt, ingredients: ingredientsId} = currentOrder;
  
  const orderedIngredients = ingredientsId.filter(ingredient => ingredient != null).map(ingredientId => {
    return ingredients.find(ingredient => ingredient._id === ingredientId);
   })

  const uniqueIngredients = [...new Set(orderedIngredients)];

  //const ingredientQuantity = orderedIngredients.filter(el => el._id === uniqueIngredients._id).length

   console.log(orderedIngredients);
   console.log(uniqueIngredients);
   //console.log(ingredientQuantity);


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
          {
            uniqueIngredients.map((item, index) => {
              return (
                <li key={index} className={`${orderInfoStyles.tableItem} mb-4`}>
                  <img src={item.image_mobile} className={orderInfoStyles.icon}/>
                  <p className="text text_type_main-default mr-4 ml-4">{item.name}</p>
                  <div className={orderInfoStyles.quantity}>
                    <p className="text text_type_digits-default mr-2">{orderedIngredients.filter(el => el._id === item._id).length}</p>
                    <p className="text text_type_digits-default mr-2">x {item.price}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                </li>
              )
            })
          }
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