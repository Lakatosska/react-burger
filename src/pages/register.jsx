import { useState } from "react";
import { Link } from 'react-router-dom';

import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './style.module.css';

export const RegisterPage = () => {

  return (
    <main className={styles.container}>
      <form className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
        <fieldset className={styles.fieldset}>
          <Input />
          <EmailInput />
          <PasswordInput />
        </fieldset>
        <Button type="primary" size="large"> 
          Зарегистрироваться
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?
        <Link to='/login' className={`${styles.link} ml-3`}>Войти</Link></p>
    </main>
  );
};