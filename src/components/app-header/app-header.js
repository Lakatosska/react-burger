import React from "react";

import { 
  Logo, 
  BurgerIcon, 
  ListIcon, 
  ProfileIcon 
} from '@ya.praktikum/react-developer-burger-ui-components';

import appHeaderStyles from './app-header.module.css';

const AppHeader = () => {
  return(
    <header className={appHeaderStyles.header}>
      <nav className={appHeaderStyles.nav}>
        <div className={appHeaderStyles.navItem}>

          <button className={appHeaderStyles.button} type='button'>
            <BurgerIcon type='primary'/>
            <span className='ml-2'>Конструктор</span>
          </button>

          <button className={appHeaderStyles.button} type='button'>
            <ListIcon type='primary'/>
            <span className='ml-2'>Лента заказов</span>
          </button>

        </div>

        <Logo className={appHeaderStyles.logo}/>

        <button className={appHeaderStyles.button} type='button'>
          <ProfileIcon type='primary'/>
          <span className='ml-2'>Личный кабинет</span>
        </button>

      </nav>
    </header>
    
  );
}

export default AppHeader;