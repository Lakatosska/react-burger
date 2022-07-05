import { useState, useMemo, FC } from 'react';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import burgerIngredientsStyles from './burger-ingredients.module.css';
//import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_MODAL } from '../../services/actions/currentIngredient';
import { getCurrentIngredient } from '../../services/actions/currentIngredient';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/types';
import { TIngredient, TType } from '../../services/types/data';

interface ICardProps {
  cardData: TIngredient;
  //count: number;
}

const Card: FC<ICardProps> = ({ cardData }) => {
  const { image, price, name, _id: id, type } = cardData;

  const { constructorItems, bun } = useSelector(store => store.constructorItems);

  const location = useLocation();
  
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: cardData,
  });

  const counter = useMemo(() => {
    if (cardData.type !== 'bun') {
      return (constructorItems.filter((item) => item._id === cardData._id).length)
    } else {
      return (bun === cardData._id ? 2 : 0)
    }
  }, [constructorItems, bun]
  );

  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalActive(true);
    dispatch(getCurrentIngredient(cardData))    
  };

  const closeModal = () => {
    setModalActive(false);
    dispatch({
      type: CLOSE_MODAL
    }); 
  };

  const modalIngredients = (
    <Modal title='Детали ингредиента' closing={closeModal}>
      <IngredientDetails/>
    </Modal >
  );

  return(
    <>
      <article className={burgerIngredientsStyles.card} 
        onClick={openModal}
        ref={dragRef}
      >
        <Link className={burgerIngredientsStyles.link}  
            to={{ pathname: `/ingredients/${id}`, state: { background: location } }}>
          {(counter > 0) && (<Counter count={counter} size="default" />)}
          <img src={image} alt={name} className='ml-4 mr-4 mb-1'/>
          <div className={`${burgerIngredientsStyles.priceItem} mt-1 mb-1`}>
            <span className='text text_type_digits-default mr-1'>{price}</span>
            <CurrencyIcon type='primary' />
          </div>
          <span className={burgerIngredientsStyles.name}>{name}</span>
        </Link>
      </article>
      {modalActive && modalIngredients}
    </>
  );
};

interface IMenuListProps {
  type: TType;
}

const MenuList: FC<IMenuListProps> = ({ type }) => {

  const { constructorItems, bun } = useSelector(store => store.constructorItems);
  const { ingredients } = useSelector(store => store.ingredients);
  const typeData = ingredients.filter(item => item.type === type);

  /*
  const counter = useMemo(() => {

    if (bun === null) return 0;
    return type === "bun" && el._id === bun._id
    ? 2
    : constructorItems.filter((item: TIngredient) => item._id === el._id).length;
}, [constructorItems, bun, el]);
    
 */

/*
  const counter = useMemo(() => {
    const counts: any = {};

    constructorItems.forEach((item) => {
      if (!counts[item._id]) {
        counts[item._id] = 0;
      }
      counts[item._id]++;
    });
      if (bun) {
    
        counts[bun._id] = 2;
         
      }
      return counts;
  }, [constructorItems, bun]);

   return(
    <div className={`${burgerIngredientsStyles.menuItems}`}>
      {typeData.map(item => (
        <Card key={item._id} cardData={item} count={counter[item._id]}/>
      ))}
    </div>
  );
*/


  return(
    <div className={`${burgerIngredientsStyles.menuItems}`}>
      {typeData.map(item => (
        <Card key={item._id} cardData={item} />
      ))}
    </div>
  );
}


const BurgerIngredients: FC = () => {
  const [current, setCurrent] = useState('Булки')

  const setTabScroll = (evt: React.UIEvent<HTMLElement>) => {
   
    const scrollTop = evt.currentTarget.scrollTop;
   
    if (scrollTop <= 250) {
        setCurrent('Булки');
    }
    else if (scrollTop > 250 && scrollTop <= 750) {
        setCurrent('Соусы');
    }
    else {
        setCurrent('Начинки');
    }
  }

  /*
  const Tab: React.FC<{
    active: boolean;
    value: string;
    onClick: (value: string) => void;
  }>
  */
  

  return(
    <section className={burgerIngredientsStyles.main}>
      <h1 className='mt-10 mb-5 text text_type_main-large'>Соберите бургер</h1>
      
      <div className={burgerIngredientsStyles.tab}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${burgerIngredientsStyles.window} custom-scroll`} onScroll={setTabScroll}>
        <ul className={burgerIngredientsStyles.menu}>
          <li>
            <h2 className='text text_type_main-medium mt-10 mb-6'>Булки</h2>
            <MenuList type='bun' />
          </li>
          <li>
            <h2 className='text text_type_main-medium mt-10 mb-6'>Соусы</h2>
            <MenuList type='sauce' />
          </li>
          <li>
            <h2 className='text text_type_main-medium mt-10 mb-6'>Начинки</h2>
            <MenuList type='main' />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BurgerIngredients;