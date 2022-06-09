import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import orderInfoStyles from './order-info.module.css';

const icons = [
  "https://code.s3.yandex.net/react/code/bun-02-mobile.png", 
  "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
  "https://code.s3.yandex.net/react/code/meat-02-mobile.png"
  ]

export const OrderInfo = () => {

  return (
    <main>
      <section className={orderInfoStyles.info}>
        <h3 className="text text_type_digits-default">#034533</h3>
        <p className="text text_type_main-medium mt-6 mb-6">Black Hole Singularity острый бургер</p>
        <p className={orderInfoStyles.status}>Выполнен</p>
      </section>

      <section className={orderInfoStyles.ingredients}>
        <p className="text text_type_main-medium mb-6">Состав:</p>

        <div className={orderInfoStyles.table}>
          <img src={icons[0]} className={orderInfoStyles.icon}/>

        </div>

      </section>

    </main>

  )
}

/*
export const OrderInfo = () => {

  const { name, number, createdAt, ingredients: ingredientsId} = card;
  const { orders } = useSelector(store => store.ws);
  const { ingredients } = useSelector(store => store.ingredients);

  const orderedIngredients = ingredientsId.map(item => {
    return ingredients.find(el => el._id === item);
  });

  const sumTotal = useMemo(() => {
    return (
      orderedIngredients.reduce((acc, item) => acc + item.price, 0)
    );
  }, [orderedIngredients]);

  return (
    <main className={`${orderInfoStyles.card} mr-2`}>
      <div className={orderInfoStyles.info}>
        <p className="text text_type_digits-default">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
      </div>
              
      <p className="text text_type_main-medium  mt-6 mb-6">{name}</p>

      <div className={orderInfoStyles.total}>
        <ul className={orderInfoStyles.icons}>
          {
            orderedIngredients.slice(0, 5).reverse().map(item => {
              return (
                <li className={orderInfoStyles.img}>
                  <img src={item.image_mobile} className={orderInfoStyles.icon}/>
                </li>
              )
            })
          }
        </ul>

        <div className={`${orderInfoStyles.price} ml-6`}>
          <p className="text text_type_digits-default mr-2">{sumTotal}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </main>
  );
};
*/
