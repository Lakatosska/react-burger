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
import { MenuList } from '../menu-list/menu-list';

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