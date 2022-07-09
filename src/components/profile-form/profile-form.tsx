import { useState, FormEvent, ChangeEvent, FC  } from "react";
import { Redirect } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from '../../services/types';
import { SET_UPDATE_USER, CANCEL_UPDATE_USER, updateUser } from '../../services/actions/auth';
import styles from './profile-form.module.css';

export const ProfileForm: FC = () => {

  const dispatch = useDispatch();
  const form = useSelector(store => store.user.form);
  const [actionButtons, setActionButtons] = useState(false);
  const { isAuth } = useSelector(store => store.user);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SET_UPDATE_USER,
      payload: {...form, [evt.target.name]: evt.target.value}
    });
    setActionButtons(true)
  };

  const onSubmitForm = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(updateUser(form));
    setActionButtons(false);
  }; 

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
    <form onSubmit={onSubmitForm} className={`${styles.form} mb-20`}>
          <fieldset className={styles.fieldset}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={onChange}
              value={`${form.name}`}
              name={'name'}
              icon={'EditIcon'}
              errorText={"Ошибка"}          
            />
            <Input
              type={'email'}
              placeholder={'Логин'}
              onChange={onChange}
              value={`${form.email}`}
              name={'email'}
              icon={'EditIcon'}
              errorText={"Ошибка"}
            />
            <Input
              type={'password'}
              placeholder={'Пароль'}
              onChange={onChange}
              value={form.password || ''}
              name={'password'}
              icon={'EditIcon'}
              errorText={"Ошибка"}
            />
          </fieldset>

          {actionButtons && (<div className={styles.actions}>
            <Button onClick={cancelUpdateForm} type="secondary" size="medium">
              Отмена
            </Button>

            <Button type="primary" size="large">
              Сохранить
            </Button>
          </div>)}

        </form>
  )
};