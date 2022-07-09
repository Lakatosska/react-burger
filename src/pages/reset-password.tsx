import { useEffect, FormEvent, ChangeEvent, FC } from "react";
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "../services/types";
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { SET_NEW_PASSWORD, resetPassword } from '../services/actions/password';
import { ILocationState } from "../services/types/data";
import styles from './style.module.css';

export const ResetPasswordPage: FC = () => {

  const dispatch = useDispatch();
  const { form, resetPasswordSuccess } = useSelector(store => store.resetPassword);
  const { forgotPasswordSuccess } = useSelector(store => store.forgotPassword);
  const { isAuth } = useSelector(store => store.user);
  const { state } = useLocation<ILocationState>();

  useEffect(() => {
    form.password = '';
    form.token = '';
  }, []); 

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SET_NEW_PASSWORD,
      payload: {...form, [evt.target.name]: evt.target.value}
    })
  }

  const onSubmitForm = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(resetPassword(form))
  } 

  if (resetPasswordSuccess) {
    return (
      <Redirect
        to={{ pathname: '/login' }}
      />
    );
  };

  if (!forgotPasswordSuccess) {
    return (
      <Redirect 
        to={{ pathname: '/forgot-password' }} 
      />
    );
  };

  if (isAuth) {
    return (
      <Redirect 
        to={ state?.from || '/' } 
      />
    )
  };

  return (
    <main className={styles.container}>
      <form onSubmit={onSubmitForm} className={`${styles.form} mb-20`}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <fieldset className={styles.fieldset}>
          <Input
            type={'password'}
            placeholder={'Введите новый пароль'}
            onChange={onChange}
            value={`${form.password}`}
            name={'password'}
            icon={'ShowIcon'}
          />
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={onChange}
            value={`${form.token}`}
            name={'token'}
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