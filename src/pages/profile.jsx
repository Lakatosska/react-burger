import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { SET_UPDATE_USER, CANCEL_UPDATE_USER, getUser, updateUser } from '../services/actions/auth';
import { logout } from '../services/actions/auth';

import styles from './style.module.css';
import { ProfileForm } from "../components/profile-form/profile-form";


export const ProfilePage = () => {

  const dispatch = useDispatch();
  const form = useSelector(store => store.user.form);
  const [actionButtons, setActionButtons] = useState(false);
  const { isAuth } = useSelector(store => store.user);

  const onChange = (evt) => {
    dispatch({
      type: SET_UPDATE_USER,
      payload: {...form, [evt.target.name]: evt.target.value}
    });
    setActionButtons(true)
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(updateUser(form));
    setActionButtons(false);
  }; 

  const handleLogout = () =>
    dispatch(
      logout()
  );

  const cancelUpdateForm = () => {
    dispatch({ 
      type: CANCEL_UPDATE_USER 
    });
  };
  
  if (!isAuth) {
    return (
      <Redirect to={{ pathname: '/login' }} />
    );
  }  

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

      <section>
        <ProfileForm />
      </section>
    </main>
  );
};