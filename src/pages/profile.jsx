import { useState, useRef } from "react";
import { NavLink } from 'react-router-dom';

import { Input, EditIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './style.module.css';


export const ProfilePage = () => {

  const [value, setValue] = useState('value');
  const inputRef = useRef(null);

  return (
    <main className={`${styles.main} mt-30`}>
      <section >
        <nav className={styles.nav}>
          <NavLink to='/profile' exact={true}
            className={`${styles.navlink} text text_type_main-medium text_color_inactive`}
            activeClassName='text text_type_main-medium'
            >Профиль</NavLink>
          <NavLink to='/profile/orders' exact={true}
            className={`${styles.navlink} text text_type_main-medium text_color_inactive`}
            activeClassName='text text_type_main-medium'
            >История заказов</NavLink>
          <NavLink to='/'
            className={`${styles.navlink} text text_type_main-medium text_color_inactive`}>Выход</NavLink>
        </nav>
        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
      </section>
      <section>
        <form className={`${styles.form} mb-20`}>
          <fieldset className={styles.fieldset}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={e => setValue(e.target.value)}
              value={''}
              name={'name'}
              ref={inputRef}
              icon={'EditIcon'}
              errorText={"Ошибка"}
            />
            <Input
              type={'email'}
              placeholder={'E-mail'}
              onChange={e => setValue(e.target.value)}
              value={''}
              name={'email'}
              ref={inputRef}
              icon={'EditIcon'}
              errorText={"Ошибка"}
            />
            <Input
              type={'password'}
              placeholder={'Введите новый пароль'}
              onChange={e => setValue(e.target.value)}
              value={''}
              name={'email'}
              ref={inputRef}
              icon={'EditIcon'}
              errorText={"Ошибка"}
            />
          </fieldset>
          <div className={styles.actions}>
            <Button type="secondary" size="medium">
              Отмена
            </Button>
            <Button type="primary" size="large">
              Сохранить
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};