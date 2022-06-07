import { useSelector } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ordersFeedStyles from './orders-feed.module.css';

const icons = [
  "https://code.s3.yandex.net/react/code/bun-02-mobile.png", 
  "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
  "https://code.s3.yandex.net/react/code/meat-02-mobile.png"
  ]

export const CardOrder = ({card}) => {

  const { orders } = useSelector(store => store.ws);
  const { ingredients } = useSelector(store => store.ingredients)




  return (
    <article className={ordersFeedStyles.card}>

      <div className={ordersFeedStyles.info}>
        <p className="text text_type_digits-default">#{card.number}</p>
        <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
      </div>
              
      <p className="text text_type_main-medium  mt-6 mb-6">{card.name}</p>

      <div className={ordersFeedStyles.total}>
        <ul className={ordersFeedStyles.icons}>
          <li className={ordersFeedStyles.img}>
            <img src={icons[0]} className={ordersFeedStyles.icon}/>
          </li>
        
          
          <div className={ordersFeedStyles.icon} style={{backgroundImage: `url(${icons[2]})` }}>
            <p className={`${ordersFeedStyles.lastIcon} text text_type_main-default`}>+3</p>
          </div>
        </ul>

        <div className={`${ordersFeedStyles.price} ml-6`}>
          <p className="text text_type_digits-default mr-2">480</p>
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
      <ul className={ordersFeedStyles.cardList}>
        {orders.map(item => {
            return(
              <CardOrder card={item}/>
            )
          })
        }
      </ul>
    </section>
  
  );
};