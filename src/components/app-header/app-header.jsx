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
        <a href='#' className={`${appHeaderStyles.link} mr-2`}>
          <BurgerIcon type='primary'/>
          <span className='ml-2 text text_type_main-default'>Конструктор</span>
        </a>

        <a href='#' className={appHeaderStyles.link}>
          <ListIcon type="secondary" />
          <span className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</span>
        </a>
      </nav>
        
      <Logo />

      <a href='#' className={appHeaderStyles.link}>
        <ProfileIcon type="secondary" />
        <span className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</span>
      </a>
      
    </header>
  );
}

export default AppHeader;