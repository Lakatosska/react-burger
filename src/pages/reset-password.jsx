import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Input, EmailInput, PasswordInput, Button, ShowIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { RESET_PASSWORD_SUCCESS, SET_NEW_PASSWORD, resetPassword } from '../services/actions/reset-password';

import styles from './style.module.css';

export const ResetPasswordPage = () => {

  const dispatch = useDispatch();

  const form = useSelector(store => store.resetPassword.form);

  useEffect(() => {
    form.password = '';
    form.code = '';
  }, []);


  const onChange = (evt) => {
    dispatch({
      type: SET_NEW_PASSWORD,
      payload: {...form, [evt.target.name]: evt.target.value} // [] - refers to dynamic key name
    })
  }

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(resetPassword(form))
  } 

  return (
    <main className={styles.container}>
      <form className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <fieldset className={styles.fieldset}>
          <Input
            type={'password'}
            placeholder={'Введите новый пароль'}
            onChange={onChange}
            value={''}
            name={'email'}
            icon={'ShowIcon'}
          />
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={onChange}
            value={''}
            name={'name'}
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