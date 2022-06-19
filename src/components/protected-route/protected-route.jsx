import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { getUser } from '../../services/actions/auth';
import { Loader } from '../loader/loader';

export function ProtectedRoute({ children, ...rest }) {

  //const { isAuth } = useSelector(store => store.user);

  const dispatch = useDispatch();

  const isAuthChecked = useSelector(store => store.user.isAuthChecked);

  useEffect(() => {
    if (!isAuthChecked) {
      dispatch(getUser());
    }
  },[dispatch, isAuthChecked]);

  if (!isAuthChecked) {
    return <Loader />;
  }
 

  return (
    <Route {...rest} render={({ location }) => 
      (isAuthChecked) ? ( 
        children
      ) : (
      <Redirect
      // переадресовываем на /login
      // в 'from' сохраним текущий маршрут (чтобы вернуться на него после login'a)
      // если state будет непустой, то юзер перенаправиться назад
        to={{
            pathname: '/login',
            state: { from: location }  
          }}
        />
      )
    }/>
  )
};

