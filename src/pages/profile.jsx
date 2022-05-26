import { useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Input, EditIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { SET_UPDATE_USER, getUser } from '../services/actions/user';
import { logout } from '../services/actions/logout';

import styles from './style.module.css';


export const ProfilePage = () => {

  //const [value, setValue] = useState('value');
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const form = useSelector(store => store.user.form);

  const onChange = (evt) => {
    dispatch({
      type: SET_UPDATE_USER,
      payload: {...form, [evt.target.name]: evt.target.value}
    })
  }

  const handleLogout = () =>
    dispatch(
      logout()
  );

  const handleGetUser = () =>
    dispatch(
      getUser()
  );

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
          <button onClick={handleLogout} className={`${styles.navlink} text text_type_main-medium text_color_inactive`}>Выход
          </button>
        </nav>
        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
      </section>
      <section>
        <form className={`${styles.form} mb-20`}>
          <fieldset className={styles.fieldset}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={onChange}
              value={form.name}
              name={'name'}
              ref={inputRef}
              icon={'EditIcon'}
              errorText={"Ошибка"}
            />
            <Input
              type={'email'}
              placeholder={'E-mail'}
              onChange={onChange}
              value={form.email}
              name={'email'}
              ref={inputRef}
              icon={'EditIcon'}
              errorText={"Ошибка"}
            />
            <Input
              type={'password'}
              placeholder={'Введите новый пароль'}
              onChange={onChange}
              value={form.password}
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
        <Button type="primary" size="large" onClick={handleGetUser}>
              getUser
            </Button>
      </section>
    </main>
  );
};