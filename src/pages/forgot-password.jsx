import { useState, useRef } from "react";
import { Link } from 'react-router-dom';

import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './style.module.css';

export const ForgotPasswordPage = () => {

  const [value, setValue] = useState('value');
  const inputRef = useRef(null);

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
            ref={inputRef}
            errorText={"Ошибка"}
          />
        </fieldset>
        <Button type="primary" size="large"> 
          Восстановить
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?
        <Link to='/login' className={`${styles.link} ml-3`}>Войти</Link></p>
    </main>
  );
};