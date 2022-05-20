import { useState } from "react";
import { Link } from 'react-router-dom';

import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { FORGOT_PASSWORD_SUCCESS } from '../services/actions/forgot-password';

import styles from './style.module.css';

export const ForgotPasswordPage = () => {

  const [value, setValue] = useState('value');

  return (
    <main className={styles.container}>
      <form className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <fieldset className={styles.fieldset}>
          <Input
            type={'email'}
            placeholder={'Укажите e-mail'}
            onChange={e => setValue(e.target.value)}
            value={''}
            name={'email'}
          />
        </fieldset>
        {FORGOT_PASSWORD_SUCCESS} && 
        <Link to='/reset-password'>
          <Button type="primary" size="large"> 
            Восстановить
          </Button>
        </Link>
      </form>

      <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?
        <Link to='/login' className={`${styles.link} ml-3`}>Войти</Link></p>
    </main>
  );
};
