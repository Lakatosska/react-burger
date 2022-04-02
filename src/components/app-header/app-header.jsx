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
        <button className={`${appHeaderStyles.button} mr-2`} type='button'>
          <BurgerIcon type='primary'/>
          <span className='ml-2 text text_type_main-default'>Конструктор</span>
        </button>

        <button className={appHeaderStyles.button} type='button'>
          <ListIcon type="secondary" />
          <span className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</span>
        </button>
      </nav>
        
      <Logo />

      <button className={appHeaderStyles.button} type='button'>
        <ProfileIcon type="secondary" />
        <span className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</span>
      </button>
      
    </header>
  );
}

export default AppHeader;