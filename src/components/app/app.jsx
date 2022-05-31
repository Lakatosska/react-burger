import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppHeader } from '../app-header/app-header';
import { getIngredients } from '../../services/actions/ingredients';
import { getUser } from '../../services/actions/user';
import { getCookie } from '../../utils/constants';
import { HomePage, 
         LoginPage, 
         RegisterPage, 
         ProfilePage, 
         ForgotPasswordPage, 
         ResetPasswordPage, 
         NotFound } from '../../pages';

import { ProtectedRoute } from '../protected-route/protected-route';

import appStyles from './app.module.css';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(getIngredients());
    },
    []
  ); 

  // при монтировании приложения проверяем, есть ли accessToken, 
  // и если есть, выполняем запрос для получения данных пользователя
  useEffect(() => {
      const accessToken = getCookie('token')
      if (accessToken) {
        dispatch(getUser())
      }
    }, 
    []
  );

  return (
    <Router>
      <div className={appStyles.app}>
        <AppHeader />
        <Switch>

          <Route path='/' exact={true}>
            <HomePage />
          </Route>

          <Route path='/login' exact={true}>
            <LoginPage />
          </Route>

          <Route path='/register' exact={true}>
            <RegisterPage />
          </Route>

          <ProtectedRoute path='/profile' exact={true}>
            <ProfilePage />
          </ProtectedRoute>

          <ProtectedRoute path='/profile/orders' exact={true}>
          </ProtectedRoute>

          <ProtectedRoute path='/ingredients/:id' exact={true}>
          </ProtectedRoute>

          <Route path='/forgot-password' exact={true}>
            <ForgotPasswordPage />
          </Route>

          <Route path='/reset-password' exact={true}>
            <ResetPasswordPage />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;