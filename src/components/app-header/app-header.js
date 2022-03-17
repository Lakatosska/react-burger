import React from "react";

import { Box, Button, Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import appHeaderStyles from './app-header.module.css';

const AppHeader = () => {
  return(
    <header className={appHeaderStyles.header}>
      <nav className={appHeaderStyles.nav}>
        <div className={appHeaderStyles.navItem}>

          <button className={appHeaderStyles.button} type='button'>
            <BurgerIcon type='primary'/>
            <span>Конструктор</span>
          </button>

          <button className={appHeaderStyles.button} type='button'>
            <ListIcon type='primary'/>
            <span>Лента заказов</span>
          </button>

        </div>

        <Logo />

        <button className={appHeaderStyles.button} type='button'>
          <ProfileIcon type='primary'/>
          <span>Личный кабинет</span>
        </button>

      </nav>
    </header>
    
  );
}

export default AppHeader;