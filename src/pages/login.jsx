import { useState } from "react";

import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import loginStyles from './login.module.css';

export const LoginPage = () => {

  return (
    <main className={loginStyles.container}>
      <form className={loginStyles.form}>
        <h2 className='text text_type_main-medium mb-6'>Вход</h2>
        <fieldset className={`${loginStyles.fieldset} mb-6`}>
          <EmailInput></EmailInput>
          <PasswordInput></PasswordInput>
        </fieldset>
        <Button type="primary" size="large"> 
          Войти
        </Button>
      </form>
      
      <p>Вы новый пользователь?</p>
      <p>Забыли пароль?</p>
      
    </main>
  );
};