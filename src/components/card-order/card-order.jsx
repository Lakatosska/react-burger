import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import cardOrderStyles from './card-order.module.css';


export const CardOrder = ({ card }) => {

  const { name, number, createdAt, ingredients: ingredientsId} = card;

  const { orders } = useSelector(store => store.ws);
  const { ingredients } = useSelector(store => store.ingredients);


  const orderedIngredients = ingredientsId.filter(ingredient => ingredient != null).map(item => {
    return ingredients.find(el => el._id === item);
   }
  );

  //console.log(orderedIngredients);

  const sumTotal = useMemo(() => {
    return (
      orderedIngredients.reduce((acc, item) => acc + item.price, 0)
    );
  }, [orderedIngredients]);


  return (
    <article className={`${cardOrderStyles.card} mr-2`}>
      <div className={cardOrderStyles.info}>
        <p className="text text_type_digits-default">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
      </div>
              
      <p className="text text_type_main-medium  mt-6 mb-6">{name}</p>

      <div className={cardOrderStyles.total}>
        <ul className={cardOrderStyles.icons}>
          { 
            (ingredientsId.length > 5) &&
              ( <div className={cardOrderStyles.icon} style={{backgroundImage: `url(${orderedIngredients[5].image_mobile})` }}>
                  <p className={`${cardOrderStyles.lastIcon} text text_type_main-default`}>+{orderedIngredients.length - 5}</p>
                </div>)
          }
          {
            orderedIngredients.slice(0, 5).reverse().map((item, index) => {
              return (
                <li key={index} className={cardOrderStyles.img}>
                  <img src={item.image_mobile} className={cardOrderStyles.icon}/>
                </li>
              )
            })
          }
        </ul>

        <div className={`${cardOrderStyles.price} ml-6`}>
          <p className="text text_type_digits-default mr-2">{sumTotal}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  )
}