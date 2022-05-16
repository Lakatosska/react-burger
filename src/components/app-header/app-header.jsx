import { Link } from 'react-router-dom';

import { 
  Logo, 
  BurgerIcon, 
  ListIcon, 
  ProfileIcon 
} from '@ya.praktikum/react-developer-burger-ui-components';

import appHeaderStyles from './app-header.module.css';

export const AppHeader = () => {

  return(
    <header className={appHeaderStyles.header}>
      <nav className={appHeaderStyles.nav}>
      
        <Link
            to={{ pathname: '/' }}
            className={`${appHeaderStyles.link} p-5 mr-2`}
          ><BurgerIcon type='primary'/>
          <span className='ml-2 text text_type_main-default'>Конструктор</span>
        </Link>
      
        <Link
          to={{ pathname: '/' }}
          className={`${appHeaderStyles.link} p-5`}>
          <ListIcon type="secondary" />
          <span className='ml-2 mr-5 text text_type_main-default text_color_inactive'>Лента заказов</span>
        </Link>
      </nav>
        
      <Logo />

      <Link
        to={{ pathname: '/profile' }}
        className={`${appHeaderStyles.link} p-5`}>
        <ProfileIcon type="secondary" />
        <span className='ml-2 mr-5 text text_type_main-default text_color_inactive'>Личный кабинет</span>
      </Link>
      
    </header>
  );
};