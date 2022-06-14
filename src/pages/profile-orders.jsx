import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { SET_UPDATE_USER, CANCEL_UPDATE_USER, getUser, updateUser } from '../services/actions/auth';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from '../services/actions/wsActions'
import { logout } from '../services/actions/auth';

import styles from './style.module.css';
import { ProfileForm } from "../components/profile-form/profile-form";
import { OrderHistory } from "../components/order-history/order-history";


export const ProfileOrdersPage = () => {

  const { isAuth } = useSelector(store => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START
    });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    }
  }, [dispatch]);

  
  if (!isAuth) {
    return (
      <Redirect to={{ pathname: '/login' }} />
    );
  }  

  const handleLogout = () =>
  dispatch(
    logout()
);


  return (
    <main className={`${styles.main} mt-30`}>
      <section >
        <nav className={styles.nav}>
          <NavLink to='/profile' exact={true}
            className={`${styles.navlink} text text_type_main-medium text_color_inactive`}
            activeClassName={styles.activeLink}
            >Профиль</NavLink>

          <NavLink to='/profile/orders' exact={true}
            className={`${styles.navlink} text text_type_main-medium text_color_inactive`}
            activeClassName={styles.activeLink}
            >История заказов</NavLink>

          <p onClick={handleLogout} className={`${styles.navlink} text text_type_main-medium text_color_inactive`}
            >Выход
          </p>
        </nav>
        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
      </section>

      <section className={styles.orderHistory}>
        <OrderHistory />
      </section>
    </main>
  );
};