
import { useState, useRef } from "react";
import { Link } from 'react-router-dom';

import { Input, EmailInput, PasswordInput, Button, ShowIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './style.module.css';

export const ResetPasswordPage = () => {

  const [value, setValue] = useState('value');
  const inputRef = useRef(null);

  return (
    <main className={styles.container}>
      <form className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <fieldset className={styles.fieldset}>
          <Input
            type={'password'}
            placeholder={'Введите новый пароль'}
            onChange={e => setValue(e.target.value)}
            value={''}
            name={'email'}
            ref={inputRef}
            icon={'ShowIcon'}
            errorText={"Ошибка"}
          />
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={e => setValue(e.target.value)}
            value={''}
            name={'name'}
            ref={inputRef}
            errorText={"Ошибка"}
          />
        </fieldset>
        <Button type="primary" size="large"> 
          Сохранить
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?
        <Link to='/login' className={`${styles.link} ml-3`}>Войти</Link></p>
    </main>
  );
};