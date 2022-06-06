import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ordersFeedStyles from './orders-feed.module.css';

const icons = [
  "https://code.s3.yandex.net/react/code/bun-02-mobile.png", 
  "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
  "https://code.s3.yandex.net/react/code/meat-02-mobile.png"
  ]

export const CardOrder = () => {
  return (
    <article className={ordersFeedStyles.card}>

      <div className={ordersFeedStyles.info}>
        <p className="text text_type_digits-default">#034535</p>
        <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
      </div>
              
      <p className="text text_type_main-medium  mt-6 mb-6">Death Star Starship Main бургер</p>

      <div className={ordersFeedStyles.total}>
        <ul className={ordersFeedStyles.icons}>
          <li className={ordersFeedStyles.img}>
            <img src={icons[0]} className={ordersFeedStyles.icon}/>
          </li>
          <li className={ordersFeedStyles.img}>
            <img src={icons[1]} className={ordersFeedStyles.icon}/>
          </li>
          <li className={ordersFeedStyles.img}>
            <img src={icons[2]} className={ordersFeedStyles.icon}/>
          </li>
          <li className={ordersFeedStyles.img}>
            <img src={icons[2]} className={ordersFeedStyles.icon}/>
          </li>
          <li className={ordersFeedStyles.img}>
            <img src={icons[2]} className={ordersFeedStyles.icon}/>
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

  return (
    <section>
      <li className={ordersFeedStyles.cardList}>
        <CardOrder />
      </li>
      <li className={ordersFeedStyles.cardList}>
        <CardOrder />
      </li>
      <li className={ordersFeedStyles.cardList}>
        <CardOrder />
      </li>
    </section>
  
  );
};