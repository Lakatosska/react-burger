import { useEffect, FormEvent, ChangeEvent, FC  } from "react";
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "../services/types";
import { SET_REGISTER_USER, register } from '../services/actions/auth';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { ILocationState } from "../services/types/data";
import styles from './style.module.css';

export const RegisterPage: FC = () => {

  const dispatch = useDispatch();

  const { form, isAuth } = useSelector(store => store.user);
  const { state } = useLocation<ILocationState>();

  useEffect(() => {
    form.name = '';
    form.email = '';
    form.password = '';
  }, []);


  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SET_REGISTER_USER,
      payload: {...form, [evt.target.name]: evt.target.value} // [] - refers to dynamic key name
    })
  }

  const onSubmitForm = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(register(form))
  } 

  if (isAuth) {
    return (
      <Redirect
        // Если объект state не является undefined, вернём пользователя назад.
        to={ state?.from || '/' }
      />
    );
  }

  return (
    <main className={styles.container}>
      <form onSubmit={onSubmitForm} className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
        <fieldset className={styles.fieldset}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={onChange}
            value={`${form.name}`}
            name={'name'}
          />
          <Input
            type={'email'}
            placeholder={'E-mail'}
            onChange={onChange}
            value={`${form.email}`}
            name={'email'}
          />
          <PasswordInput 
            onChange={onChange} 
            value={`${form.password}`}
            name={'password'}
          />
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