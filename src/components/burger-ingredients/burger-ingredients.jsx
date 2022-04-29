import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { cardPropTypes } from '../../utils/prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_MODAL } from '../../services/actions/currentIngredient';
import { getCurrentIngredient } from '../../services/actions/currentIngredient';
import { useDrag } from 'react-dnd';


const Card = ({ cardData, count }) => {
  const { image, price, name, _id: id } = cardData;
  
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: cardData,
  });

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
        {(count > 0) && (<Counter count={count} size="default" />)}
        <img src={image} alt={name} className='ml-4 mr-4 mb-1'/>
        <div className={`${burgerIngredientsStyles.priceItem} mt-1 mb-1`}>
          <span className='text text_type_digits-default mr-1'>{price}</span>
          <CurrencyIcon type='primary' />
        </div>
        <span className={burgerIngredientsStyles.name}>{name}</span>
      </article>
      {modalActive && modalIngredients}
    </>
  );
};

Card.propTypes = {
  cardData: cardPropTypes.isRequired,
  count: PropTypes.number,
};


const MenuList = ({ type }) => {

  const { constructorItems, bun } = useSelector(store => store.constructorItems);

  const counter = useMemo(() => {
    const counts = {};

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

  const { ingredients } = useSelector(store => store.ingredients);
  const typeData = ingredients.filter(item => item.type === type);

  return(
    <div className={`${burgerIngredientsStyles.menuItems}`}>
      {typeData.map(item => (
        <Card key={item._id} cardData={item} count={counter[item._id]}/>
      ))}
    </div>
  );
}

MenuList.propTypes = {
  type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
};

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('Булки')

  const setTabScroll = (evt) => {
    const scrollTop = evt.target.scrollTop;
   
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