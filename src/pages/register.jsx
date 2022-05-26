import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { SET_REGISTER_USER, register } from '../services/actions/register';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './style.module.css';


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const form = useSelector(store => store.register.form);

  useEffect(() => {
    form.name = '';
    form.email = '';
    form.password = '';
  }, []);


  const onChange = (evt) => {
    dispatch({
      type: SET_REGISTER_USER,
      payload: {...form, [evt.target.name]: evt.target.value} // [] - refers to dynamic key name
    })
  }

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(register(form))
  } 

  return (
    <main className={styles.container}>
      <form className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
        <fieldset className={styles.fieldset}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={onChange}
            value={form.name}
            name={'name'}
          />
          <Input
            type={'email'}
            placeholder={'E-mail'}
            onChange={onChange}
            value={form.email}
            name={'email'}
          />
          <PasswordInput 
            onChange={onChange} 
            value={form.password} 
            name={'password'}
          />
        </fieldset>
        
        <Button type="primary" size="large" onClick={onSubmitForm}> 
          Зарегистрироваться
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?
        <Link to='/login' className={`${styles.link} ml-3`}>Войти</Link></p>
    </main>
  );
}
