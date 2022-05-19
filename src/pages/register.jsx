import { useState, useRef } from "react";
import { Link } from 'react-router-dom';

import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './style.module.css';

export const RegisterPage = () => {

  const [value, setValue] = useState('value')
  const inputRef = useRef(null)
  

  return (
    <main className={styles.container}>
      <form className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
        <fieldset className={styles.fieldset}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setValue(e.target.value)}
          value={''}
          name={'name'}
          error={false}
          ref={inputRef}
          errorText={'Ошибка'}
          size={'default'}
        />
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={e => setValue(e.target.value)}
          value={''}
          name={'email'}
          error={false}
          ref={inputRef}
          errorText={'Ошибка'}
          size={'default'}
        />
          <PasswordInput 
            onChange={e => setValue(e.target.value)} 
            value={''} 
            name={'password'}/>
        </fieldset>
        
        <Button type="primary" size="large"> 
          Зарегистрироваться
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?
        <Link to='/login' className={`${styles.link} ml-3`}>Войти</Link></p>
    </main>
  );
}
