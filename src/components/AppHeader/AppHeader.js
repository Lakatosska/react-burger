import React from "react";

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import './AppHeader.css';

const AppHeader = () => {
  return(
    <div>
      <BurgerIcon />
      <ListIcon />
      <Logo />
      <ProfileIcon />
    </div>
    
  );
}

export default AppHeader;