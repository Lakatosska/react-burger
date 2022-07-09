import { useMemo, FC } from 'react';
import { useLocation} from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/types';
import { placeOrderDate } from '../../utils/constants';
import { TOrder } from '../../services/types/data';

import cardOrderStyles from './card-order.module.css';

interface ICardOrderProps {
  card: TOrder;
}

export const CardOrder: FC<ICardOrderProps> = ({ card }) => {

  const { name, number, createdAt, ingredients: ingredientsId} = card;

  const { ingredients } = useSelector(store => store.ingredients);
  const { pathname } = useLocation();

  const orderedIngredients = ingredientsId.filter(ingredient => ingredient != null).map(item => {
    return ingredients.find(el => el._id === item);
   }
  );  

  const sumTotal = useMemo(() => {
    return (
      orderedIngredients.reduce((acc, item) => acc + item!.price, 0)
    );
  }, [orderedIngredients]);

  let status;
  let color;
  switch (card.status) {
    case 'done':
      status = 'Выполнен';
      color = '#00CCCC';
      break;
    case 'pending':
      status = 'Готовится';
      break;
    case 'created':
      status = 'Создан';
      break;
      default:
  }


  return (
    <article className={`${cardOrderStyles.card} mr-2`}>
      <div className={cardOrderStyles.info}>
        <p className="text text_type_digits-default">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">{placeOrderDate(createdAt)}</p>
      </div>
      <div>       
        <p className="text text_type_main-medium mt-6 mb-2">{name}</p>
        {(pathname === '/profile/orders') && 
        (<p className='text text_type_main-default' style={{color}}>{status}</p>)}
      </div> 
      <div className={`${cardOrderStyles.total} mt-6`}>
        <ul className={cardOrderStyles.icons}>
          { 
            (ingredientsId.length > 5) &&
              ( <div className={cardOrderStyles.icon} style={{backgroundImage: `url(${orderedIngredients[5]!.image_mobile})` }}>
                  <p className={`${cardOrderStyles.lastIcon} text text_type_main-default`}>+{orderedIngredients.length - 5}</p>
                </div>)
          }
          {
            orderedIngredients.slice(0, 5).reverse().map((item, index) => {
              return (
                <li key={index} className={cardOrderStyles.img}>
                  <img src={item!.image_mobile} className={cardOrderStyles.icon} alt='иконка ингредиента'/>
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