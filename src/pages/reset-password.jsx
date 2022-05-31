import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { Input, Button, ShowIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { SET_NEW_PASSWORD, resetPassword } from '../services/actions/reset-password';

import styles from './style.module.css';

export const ResetPasswordPage = () => {

  const dispatch = useDispatch();
  const { form, resetPasswordSuccess } = useSelector(store => store.resetPassword);
  const { forgotPasswordSuccess } = useSelector(store => store.forgotPassword);
  const { isAuth } = useSelector(store => store.user);
  const { state } = useLocation();

  
  useEffect(() => {
    form.password = '';
    form.token = '';
  }, []); 

  const onChange = (evt) => {
    dispatch({
      type: SET_NEW_PASSWORD,
      payload: {...form, [evt.target.name]: evt.target.value}
    })
  }

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(resetPassword(form))
  } 

  if (resetPasswordSuccess) {
    return (
      <Redirect
        to={{ pathname: '/login' }}
      />
    );
  };

  if (!forgotPasswordSuccess) {
    return (
      <Redirect 
        to={{ pathname: '/forgot-password' }} 
      />
    );
  };

  if (isAuth) {
    return (
      <Redirect 
        to={ state?.from || '/' } 
      />
    )
  };

  return (
    <main className={styles.container}>
      <form className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <fieldset className={styles.fieldset}>
          <Input
            type={'password'}
            placeholder={'Введите новый пароль'}
            onChange={onChange}
            value={form.password}
            name={'password'}
            icon={'ShowIcon'}
          />
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={onChange}
            value={form.token}
            name={'token'}
          />
        </fieldset>

        <Button type="primary" size="large" onClick={onSubmitForm}> 
          Сохранить
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?
        <Link to='/login' className={`${styles.link} ml-3`}>Войти</Link></p>
    </main>
  );
};