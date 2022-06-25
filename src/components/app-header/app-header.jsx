import { NavLink } from 'react-router-dom';

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
      <div className={appHeaderStyles.list}>
      
        <NavLink to='/' exact={true}
            className={`${appHeaderStyles.link} p-5 mr-2`}
            activeClassName={appHeaderStyles.activeLink}
          ><BurgerIcon type='secondary'/>
          <span className='ml-2 text text_type_main-default text_color_inactive'>Конструктор</span>
        </NavLink>
      
        <NavLink to='/feed' exact={true}
          className={`${appHeaderStyles.link} p-5`}
          activeClassName={appHeaderStyles.activeLink}>
          <ListIcon type="secondary" />
          <span className='ml-2 mr-5 text text_type_main-default text_color_inactive'>Лента заказов</span>
        </NavLink>
      </div>

        <NavLink to='/' exact={true}>  
          <Logo />
        </NavLink>

        <NavLink to='/profile' exact={true}
          className={`${appHeaderStyles.link} p-5`}
          activeClassName={appHeaderStyles.activeLink}>
          <ProfileIcon type="secondary" />
          <span className='ml-2 mr-5 text text_type_main-default text_color_inactive'>Личный кабинет</span>
        </NavLink>
      
    </header>
  );
};