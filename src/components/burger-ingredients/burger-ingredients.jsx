import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { cardPropTypes } from '../../utils/prop-types';
import { DataContext } from '../../services/app-context';
import { useSelector, useDispatch } from 'react-redux';
import { OPEN_MODAL, CLOSE_MODAL } from '../../services/actions/currentIngredient';
import { getCurrentIngredient } from '../../services/actions/currentIngredient';

const BurgerTabs = () => {
  const [current, setCurrent] = useState('one')
    return (
      <div className={burgerIngredientsStyles.tab}>
        <Tab value='one' active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value='two' active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value='three' active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    );
}

const Card = ({ cardData }) => {
  const { image, price, name } = cardData;
  
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setModalActive(true);
    dispatch(getCurrentIngredient(cardData))    
  };

  const closeModal = () => {
    setModalActive(false);
    dispatch({type: CLOSE_MODAL}); 
  };

  const modalIngredients = (
    <Modal title='Детали ингредиента' closing={closeModal}>
      <IngredientDetails ingredient={cardData}/>
    </Modal >
  );

  return(
    <>
      <article className={burgerIngredientsStyles.card} onClick={openModal}>
        <Counter count={1} size="default" />
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
}

Card.propTypes = {
  cardData: cardPropTypes.isRequired,
};

const MenuList = ({ ingredientData, type }) => {
  const typeData = ingredientData.filter(item => item.type === type);

  return(
    <div className={`${burgerIngredientsStyles.menuItems}`}>
      {typeData.map(item => (
        <Card key={item._id} cardData={item} />
      ))}
    </div>
  );
}

MenuList.propTypes = {
  ingredientData: PropTypes.arrayOf(cardPropTypes).isRequired,
  type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
};

const BurgerIngredients = () => {

 // const ingredients = useContext(DataContext);
  
 // сохраняем в переменную данные из функции getIngredients в actions:
 // 'type: GET_INGREDIENTS_SUCCESS, ingredients: res.data'
  const ingredients = useSelector(store => store.ingredients.ingredients);

  return(
    <section className={burgerIngredientsStyles.main}>
      <h1 className='mt-10 mb-5 text text_type_main-large'>Соберите бургер</h1>
      <BurgerTabs />
      <div className={`${burgerIngredientsStyles.window} custom-scroll`}>
        <ul className={burgerIngredientsStyles.menu}>
          <li>
            <h2 className='text text_type_main-medium mt-10 mb-6'>Булки</h2>
            <MenuList type='bun' ingredientData={ingredients} />
          </li>
          <li>
            <h2 className='text text_type_main-medium mt-10 mb-6'>Соусы</h2>
            <MenuList type='sauce' ingredientData={ingredients} />
          </li>
          <li>
            <h2 className='text text_type_main-medium mt-10 mb-6'>Начинки</h2>
            <MenuList type='main' ingredientData={ingredients} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BurgerIngredients;