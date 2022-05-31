import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { SET_LOGIN_USER, login } from '../services/actions/login';

import styles from './style.module.css';

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { state } = useLocation();

  const { form, isLogin } = useSelector(store => store.login);

  const isAuth = localStorage.getItem('token');

  /*
  useEffect(() => {
    form.email = '';
    form.password = '';
  }, []);
  */

  const onChange = (evt) => {
    dispatch({
      type: SET_LOGIN_USER,
      payload: {...form, [evt.target.name]: evt.target.value}
    })
  }

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(login(form))
  } 

  /*
  if (isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  */

    
  if (isLogin) {
    return (
      <Redirect
        // Если объект state не является undefined, вернём пользователя назад.
        to={ state?.from || '/' }
      />
    );
  }
  
  

  return (
    <main className={styles.container}>
      <form className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Вход</h2>
        <fieldset className={styles.fieldset}>
          <Input
            type={'email'}
            placeholder={'E-mail'}
            onChange={onChange}
            value={form.email}
            name={'email'}
          />
          <PasswordInput 
            onChange={onChange} 
            value={form.password} 
            name={'password'}
          />
        </fieldset>
        <Button type="primary" size="large" onClick={onSubmitForm}> 
          Войти
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mb-4">Вы - новый пользователь?
        <Link to='/register' className={`${styles.link} ml-3`}>Зарегистрироваться</Link></p>
      <p className="text text_type_main-default text_color_inactive">Забыли пароль?
        <Link to='/forgot-password' className={`${styles.link} ml-3`}>Восстановить пароль</Link></p>
    </main>
  );
};