import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';

import { AppHeader } from '../app-header/app-header';
import { getIngredients } from '../../services/actions/ingredients';
import { getUser } from '../../services/actions/auth';
import { CLOSE_MODAL } from '../../services/actions/currentIngredient';
import { getCookie } from '../../utils/constants';
import { HomePage, 
         LoginPage, 
         RegisterPage, 
         ProfilePage, 
         ForgotPasswordPage, 
         ResetPasswordPage,
         IngredientPage, 
         NotFound } from '../../pages';
import { ProtectedRoute } from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import appStyles from './app.module.css';

const App = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const background = location.state && location.state.background;
  
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

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL
    }); 
    history.replace({ pathname: '/' });
  };

  return (
    
      <div className={appStyles.app}>
        <AppHeader />

        <Switch location={ background || location }>

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

          <Route path='/ingredients/:id'>
            <IngredientPage />
          </Route>

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

        { background && (
          <Route path='/ingredients/:id'>
            <Modal title='Детали ингредиента' closing={closeModal}>
              <IngredientDetails />
            </Modal>
          </Route>
        )}

      </div>
    
  );
}

export default App;