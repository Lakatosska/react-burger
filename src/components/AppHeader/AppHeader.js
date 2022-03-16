import React from "react";

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import './AppHeader.css';

const AppHeader = () => {
  return(
    <>
      <BurgerIcon />
      <ListIcon />
      <Logo />
      <ProfileIcon text={'Личный кабинет'}/>
    </>
    
  );
}

export default AppHeader;