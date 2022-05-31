import { useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import { Input, EditIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { SET_UPDATE_USER, CANCEL_UPDATE_USER, getUser, updateUser } from '../services/actions/auth';
import { logout } from '../services/actions/auth';

import styles from './style.module.css';


export const ProfilePage = () => {

  const dispatch = useDispatch();
  const form = useSelector(store => store.user.form);
  //const isAuth = localStorage.getItem('token');
  const [actionButtons, setActionButtons] = useState(false);
  const { isAuth } = useSelector(store => store.user);


  const onChange = (evt) => {
    dispatch({
      type: SET_UPDATE_USER,
      payload: {...form, [evt.target.name]: evt.target.value}
    });
    setActionButtons(true)
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(updateUser(form));
    setActionButtons(false);
  }; 

  const handleLogout = () =>
    dispatch(
      logout()
  );

  const cancelUpdateForm = () => {
    dispatch({ 
      type: CANCEL_UPDATE_USER 
    });
  };

  
  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    );
  }
  
  

  return (
    <main className={`${styles.main} mt-30`}>
      <section >
        <nav className={styles.nav}>
          <NavLink to='/profile' exact={true}
            className={`${styles.navlink} text text_type_main-medium text_color_inactive`}
            activeClassName={styles.activeLink}
            >Профиль</NavLink>

          <NavLink to='/profile/orders' exact={true}
            className={`${styles.navlink} text text_type_main-medium text_color_inactive`}
            activeClassName={styles.activeLink}
            >История заказов</NavLink>

          <p onClick={handleLogout} className={`${styles.navlink} text text_type_main-medium text_color_inactive`}
            >Выход
          </p>
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
              icon={'EditIcon'}
              errorText={"Ошибка"}
             
          
            />
            <Input
              type={'email'}
              placeholder={'Логин'}
              onChange={onChange}
              value={form.email}
              name={'email'}
              icon={'EditIcon'}
              errorText={"Ошибка"}
              //onIconClick={console.log('кликнули на Логин')}
              //disabled
            />
            <Input
              type={'password'}
              placeholder={'Пароль'}
              onChange={onChange}
              value={form.password}
              name={'password'}
              icon={'EditIcon'}
              errorText={"Ошибка"}
              //onIconClick={console.log('кликнули на Пароль')}
              //disabled
            />
          </fieldset>

          {actionButtons && (<div className={styles.actions}>
            <Button onClick={cancelUpdateForm} type="secondary" size="medium">
              Отмена
            </Button>

            <Button onClick={onSubmitForm} type="primary" size="large">
              Сохранить
            </Button>
          </div>)}

        </form>
      </section>
    </main>
  );
};