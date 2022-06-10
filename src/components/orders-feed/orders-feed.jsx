import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ordersFeedStyles from './orders-feed.module.css';


export const CardOrder = ({ card }) => {

  const { name, number, createdAt, ingredients: ingredientsId} = card;

  const { orders } = useSelector(store => store.ws);
  const { ingredients } = useSelector(store => store.ingredients);


  const orderedIngredients = ingredientsId.filter(ingredient => ingredient != null).map(item => {
    return ingredients.find(el => el._id === item);
   }
  );

  console.log(orderedIngredients);

  const sumTotal = useMemo(() => {
    return (
      orderedIngredients.reduce((acc, item) => acc + item.price, 0)
    );
  }, [orderedIngredients]);

  console.log(sumTotal);

  return (
    <article className={`${ordersFeedStyles.card} mr-2`}>
      <div className={ordersFeedStyles.info}>
        <p className="text text_type_digits-default">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
      </div>
              
      <p className="text text_type_main-medium  mt-6 mb-6">{name}</p>

      <div className={ordersFeedStyles.total}>
        <ul className={ordersFeedStyles.icons}>
          { 
            (ingredientsId.length > 5) &&
              ( <div className={ordersFeedStyles.icon} style={{backgroundImage: `url(${orderedIngredients[5].image_mobile})` }}>
                  <p className={`${ordersFeedStyles.lastIcon} text text_type_main-default`}>+{orderedIngredients.length - 5}</p>
                </div>)
          }
          {
            orderedIngredients.slice(0, 5).reverse().map((item, index) => {
              return (
                <li key={index} className={ordersFeedStyles.img}>
                  <img src={item.image_mobile} className={ordersFeedStyles.icon}/>
                </li>
              )
            })
          }
        </ul>

        <div className={`${ordersFeedStyles.price} ml-6`}>
          <p className="text text_type_digits-default mr-2">{sumTotal}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  )
}


export const OrdersFeed = () => {

  const { orders } = useSelector(store => store.ws);

  return (
    <section>
      <ul className={`${ordersFeedStyles.cardList} custom-scroll`}>
        {orders.map(item => (
            <li key={item._id}>
              <CardOrder card={item}/>
            </li>
          ))
        }
      </ul>
    </section>
  );
};