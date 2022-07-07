import { useCallback, useState, useEffect, FormEvent, ChangeEvent, FC  } from "react";
//import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from "../services/types";
import { SET_LOGIN_USER, login } from '../services/actions/auth';
// import { getStorageItem } from "../utils/constants"; 
import { ILocationState } from "../services/types/data";

import styles from './style.module.css';


export const LoginPage: FC = () => {

  const dispatch = useDispatch();
  const { form, isAuth } = useSelector(store => store.user);
  const { state } = useLocation<ILocationState>();


  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SET_LOGIN_USER,
      payload: {...form, [evt.target.name]: evt.target.value}
    })
  }

  const onSubmitForm = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault();
      dispatch(login(form))
    },
    [form, dispatch] 
  );
    
  if (isAuth) {
    return (
      <Redirect
        to={ state?.from || '/' }
      />
    );
  }

  /*
  if (getStorageItem('refreshToken')) {
    return <Redirect to={state?.from || "/"} />;
  }
  */
  
  return (
    <main className={styles.container}>
      <form onSubmit={onSubmitForm} className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Вход</h2>
        <fieldset className={styles.fieldset}>
          <Input
            type={'email'}
            placeholder={'E-mail'}
            onChange={onChange}
            value={`${form.email}`}
            name={'email'}
          />
          <PasswordInput 
            onChange={onChange} 
            value={form.password || ''} 
            name={'password'}
          />
        </fieldset>
        <Button type="primary" size="large"> 
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