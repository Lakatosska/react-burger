import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { SET_FORGOT_PASSWORD, forgotPassword } from '../services/actions/forgot-password';

import styles from './style.module.css';

export const ForgotPasswordPage = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const { form, forgotPasswordSuccess } = useSelector(store => store.forgotPassword);
  //const isAuth = localStorage.getItem('token');
  const { isAuth } = useSelector(store => store.user);


  useEffect(() => {
    form.email = '';
  }, []);

  const onChange = (evt) => {
    dispatch({
      type: SET_FORGOT_PASSWORD,
      payload: {...form, [evt.target.name]: evt.target.value} 
    })
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(forgotPassword(form))
  }; 

  if (forgotPasswordSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/reset-password',
        }}
      />
    );
  }

  if (isAuth) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  } else {

    return (
      <main className={styles.container}>
        <form className={`${styles.form} mb-20`}>
          <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
          <fieldset className={styles.fieldset}>
            <Input
              type={'email'}
              placeholder={'Укажите e-mail'}
              onChange={onChange}
              value={form.email}
              name={'email'}
            />
          </fieldset>
          
            <Button type="primary" size="large" onClick={onSubmitForm}> 
              Восстановить
            </Button>
          
        </form>

        <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?
          <Link to='/login' className={`${styles.link} ml-3`}>Войти</Link></p>
      </main>
    );
  };
}

