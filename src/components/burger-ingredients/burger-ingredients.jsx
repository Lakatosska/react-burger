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
import { useDrag,  useDrop } from 'react-dnd';

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

const Card = ({ card }) => {
  const { image, price, name, type, _id: id, __v } = card;
  const { constructorItems, constructorBun } = useSelector(store => store.constructorItems);
  const { ingredients } = useSelector(store => store.ingredients);
  
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { id, type },
  });

  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setModalActive(true);
    dispatch(getCurrentIngredient(card))    
  };

  const closeModal = () => {
    setModalActive(false);
    dispatch({type: CLOSE_MODAL}); 
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



const MenuList = ({  type }) => {
  const { ingredients } = useSelector(store => store.ingredients);
  const typeData = ingredients.filter(item => item.type === type);

  return(
    <div className={`${burgerIngredientsStyles.menuItems}`}>
      {typeData.map(item => (
        <Card key={item._id} card={item} />
      ))}
    </div>
  );
}



const BurgerIngredients = () => {

 // const ingredients = useContext(DataContext);
  
 // сохраняем в переменную данные из функции getIngredients в actions:
 // 'type: GET_INGREDIENTS_SUCCESS, ingredients: res.data'
  const ingredients = useSelector(store => store.ingredients.ingredients);

  const [, drop] = useDrop(() => ({ accept: 'item' }));

  return(
    <section className={burgerIngredientsStyles.main} ref={drop}>
      <h1 className='mt-10 mb-5 text text_type_main-large'>Соберите бургер</h1>
      <BurgerTabs />
      <div className={`${burgerIngredientsStyles.window} custom-scroll`}>
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