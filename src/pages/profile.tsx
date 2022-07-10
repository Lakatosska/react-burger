import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../services/actions/auth';
import { ProfileForm } from '../components/profile-form/profile-form';
import styles from './style.module.css';


export const ProfilePage: FC = () => {

  const dispatch = useDispatch();

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

      <section>
        <ProfileForm />
      </section>
    </main>
  );
};