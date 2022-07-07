import { useEffect, FormEvent, ChangeEvent, FC  } from "react";
//import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "../services/types";
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { SET_FORGOT_PASSWORD, forgotPassword } from '../services/actions/password';
import { ILocationState } from "../services/types/data";
import styles from './style.module.css';


export const ForgotPasswordPage: FC = () => {

  const dispatch = useDispatch();
  const { state } = useLocation<ILocationState>();
  const { isAuth } = useSelector(store => store.user);
  const { form, forgotPasswordSuccess } = useSelector(store => store.forgotPassword);

  useEffect(() => {
    form.email = '';
  }, []);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SET_FORGOT_PASSWORD,
      payload: {...form, [evt.target.name]: evt.target.value} 
    })
  };

  const onSubmitForm = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(forgotPassword(form))
  }; 

  if (forgotPasswordSuccess) {
    return (
      <Redirect
        to={{ pathname: '/reset-password' }}
      />
    );
  }

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
              type={'email'}
              placeholder={'Укажите e-mail'}
              onChange={onChange}
              value={`${form.email}`}
              name={'email'}
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