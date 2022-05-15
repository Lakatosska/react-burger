import { NavLink } from 'react-router-dom';

import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './style.module.css';


export const ProfilePage = () => {

  return (
    <main>
      <section>
        <nav className={styles.nav}>
          <NavLink to='/profile' exact={true}
            className={`${styles.navlink} text text_type_main-default`}
            >Профиль</NavLink>
          <NavLink to='/'
            className={styles.link}>История заказов</NavLink>
          <NavLink to='/'
            className={styles.link}>Выход</NavLink>

        </nav>

      </section>
      <section>
        <form className={`${styles.form} mb-20`}>
          <fieldset className={styles.fieldset}>
            <Input />
            <EmailInput />
            <PasswordInput />
          </fieldset>
        </form>
      </section>
    </main>
  );
};