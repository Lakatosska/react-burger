import { useEffect, FC } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { Location } from 'history';
import { useDispatch } from '../../services/types';
import { AppHeader } from '../app-header/app-header';
import { ProtectedRoute } from '../protected-route/protected-route';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { getIngredients } from '../../services/actions/ingredients';
import { getUser, AUTH_CHECKED } from '../../services/actions/auth';
import { getCookie } from '../../utils/constants';
import { HomePage, 
         LoginPage, 
         RegisterPage, 
         ProfilePage, 
         ForgotPasswordPage, 
         ResetPasswordPage,
         IngredientPage, 
         NotFound, 
         ProfileOrdersPage,
         FeedPage,
         OrderPage 
        } from '../../pages';
import { ILocationState } from '../../services/types/data';
import appStyles from './app.module.css';

const App: FC = () => {

  const dispatch = useDispatch();
  const history = useHistory();

/*
  interface ILocation {
    key: string;
    pathname: string;
    search: string;
    hash: string;
    state: {};    
  };
  // ругается на background в 'location.state.background'
 
*/
  interface IAppLocation {
    background: Location
  }
   
  const location = useLocation<IAppLocation>()
  const background = location.state && location.state.background;
  
  useEffect(() => {
      dispatch(getIngredients());
    },
    []); 

  useEffect(() => {
    const accessToken = getCookie('token');
    if (accessToken) {
      dispatch(getUser());
    } else {
      dispatch({type: AUTH_CHECKED});
    }
  }, []);


  const closeModal = () => {
    history.goBack();
  };

  return (
    <ErrorBoundary>
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
            <ProfileOrdersPage/>
          </ProtectedRoute>

          <ProtectedRoute path='/profile/orders/:id' exact={true}>
            <OrderPage />
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

          <Route path='/feed' exact={true}>
            <FeedPage />
          </Route>

          <Route path='/feed/:id' exact={true}>
            <OrderPage />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>

        { background && (
          <Route path='/ingredients/:id'>
            <Modal closing={closeModal} showModal={true}>
              <IngredientDetails showModal={true}/>
            </Modal>
          </Route>
        )}

        { background && (
          <Route path='/feed/:id'>
            <Modal closing={closeModal} showModal={true}>
              <OrderPage />
            </Modal>
          </Route>
        )}

        { background && (
          <Route path='/profile/orders/:id'>
            <Modal closing={closeModal} showModal={true}>
              <OrderPage />
            </Modal>
          </Route>
        )}

      </div>
    </ErrorBoundary>
  );
}

export default App;