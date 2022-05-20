import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, forgotPassword } from '../services/actions/forgot-password';

import styles from './style.module.css';

export const ForgotPasswordPage = () => {

  const dispatch = useDispatch();

  const form = useSelector(store => store.forgotPassword.form);

  const onChange = (evt) => {
    dispatch({
    type: FORGOT_PASSWORD_REQUEST,
    payload: {...form, [evt.target.name]: evt.target.value} // [] - refers to dynamic key name
    })
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(forgotPassword(form))
  } 

  return (
    <main className={styles.container}>
      <form className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <fieldset className={styles.fieldset}>
          <Input
            type={'email'}
            placeholder={'Укажите e-mail'}
            onChange={onChange}
            value={form.email}
            name={'email'}
          />
        </fieldset>
        
          <Button type="primary" size="large" onClick={onFormSubmit}> 
            Восстановить
          </Button>
        
      </form>

      <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?
        <Link to='/login' className={`${styles.link} ml-3`}>Войти</Link></p>
    </main>
  );
};
