import { useState, useRef, FC } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { MenuList } from '../menu-list/menu-list';
import burgerIngredientsStyles from './burger-ingredients.module.css';

export const BurgerIngredients: FC = () => {
  const [current, setCurrent] = useState('Булки');

  const bun = useRef<any>(null);
  const sauce = useRef<any>(null);
  const main = useRef<any>(null);
  const tabClick = (current: string) => {
        if (current === 'Булки') {
            if (bun.current) {
                bun.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
            }
            setCurrent('Булки')
        }
        else if (current === 'Соусы') {
            if (bun.current) {
                sauce.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
            }
            setCurrent('Соусы')
        }
        else if (current === 'Начинки') {
            if (bun.current) {
                main.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
            }
            setCurrent('Начинки')
        }
    }

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
        <Tab value='Булки' active={current === 'Булки'} onClick={() => tabClick('Булки')}>
          Булки
        </Tab>
        <Tab value='Соусы' active={current === 'Соусы'} onClick={() => tabClick('Соусы')}>
          Соусы
        </Tab>
        <Tab value='Начинки' active={current === 'Начинки'} onClick={() => tabClick('Начинки')}>
          Начинки
        </Tab>
      </div>
      <div className={`${burgerIngredientsStyles.window} custom-scroll`} onScroll={setTabScroll}>
        <ul className={burgerIngredientsStyles.menu}>
          <li ref={bun}>
            <h2 className='text text_type_main-medium mt-10 mb-6'>Булки</h2>
            <MenuList type='bun' />
          </li>
          <li ref={sauce}>
            <h2 className='text text_type_main-medium mt-10 mb-6'>Соусы</h2>
            <MenuList type='sauce' />
          </li>
          <li ref={main}>
            <h2 className='text text_type_main-medium mt-10 mb-6'>Начинки</h2>
            <MenuList type='main' />
          </li>
        </ul>
      </div>
    </section>
  );
};