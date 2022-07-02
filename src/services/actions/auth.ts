import { BASEURL, checkResponse, getCookie, setCookie, deleteCookie } from '../../utils/constants';
import { AppThunk, AppDispatch } from '../types';
import { TUser } from '../types/data';

export const REGISTER_REQUEST: 'REGISTER_REQUEST'  = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_FAILED: 'REGISTER_FAILED'  = 'REGISTER_FAILED';
export const SET_REGISTER_USER: 'SET_REGISTER_USER' = 'SET_REGISTER_USER';

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILED: 'LOGIN_FAILED'  = 'LOGIN_FAILED';
export const SET_LOGIN_USER: 'SET_LOGIN_USER' = 'SET_LOGIN_USER';

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST' = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS' = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED: 'UPDATE_USER_FAILED' = 'UPDATE_USER_FAILED';
export const SET_UPDATE_USER: 'SET_UPDATE_USER' = 'SET_UPDATE_USER';
export const CANCEL_UPDATE_USER: 'CANCEL_UPDATE_USER' = 'CANCEL_UPDATE_USER';

export const UPDATE_TOKEN_REQUEST: 'UPDATE_TOKEN_REQUEST' = 'UPDATE_TOKEN_REQUEST';
export const UPDATE_TOKEN_SUCCESS: 'UPDATE_TOKEN_SUCCESS' = 'UPDATE_TOKEN_SUCCESS';
export const UPDATE_TOKEN_FAILED: 'UPDATE_TOKEN_FAILED' = 'UPDATE_TOKEN_FAILED';

export const AUTH_CHECKED: 'AUTH_CHECKED' = 'AUTH_CHECKED';

export interface IRegisterAction {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
  form: TUser;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
}

export interface ISetRegisterUserAction {
  readonly type: typeof SET_REGISTER_USER;
  payload: TUser;
}

export interface ILoginAction {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  form: TUser;
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}

export interface ISetLoginUserAction {
  readonly type: typeof SET_LOGIN_USER;
  payload: TUser;
}

export interface ILogoutAction {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

export interface IGetUserAction {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  form: TUser;
}

export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}

export interface IUpdateUserAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  form: TUser;
}

export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
}

export interface ISetUpdateUserAction {
  readonly type: typeof SET_UPDATE_USER;
  payload: TUser;
}

export interface ICancelUpdateUserAction {
  readonly type: typeof CANCEL_UPDATE_USER;
}

export interface IUpdateTokenAction {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}

export interface IUpdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
}

export interface IUpdateTokenFailedAction {
  readonly type: typeof UPDATE_TOKEN_FAILED;
}

export interface IAuthCheckedAction {
  readonly type: typeof AUTH_CHECKED;
}

export type TAuthActions =
  | IRegisterAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | ISetRegisterUserAction
  | ILoginAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | ISetLoginUserAction
  | ILogoutAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | IGetUserAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | IUpdateUserAction
  | IUpdateUserSuccessAction
  | IUpdateUserFailedAction
  | ISetUpdateUserAction
  | ICancelUpdateUserAction
  | IUpdateTokenAction
  | IUpdateTokenSuccessAction
  | IUpdateTokenFailedAction
  | IAuthCheckedAction;


export const register: AppThunk = (form: TUser) => {

  return function(dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_REQUEST
    })
    fetch(`${BASEURL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(checkResponse)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: REGISTER_SUCCESS,
          form: res.user
        });
        const accessToken = res.accessToken.split('Bearer ')[1];
        setCookie('token', accessToken, { path: '/' });
        localStorage.setItem('token', res.refreshToken);     
      } 
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: REGISTER_FAILED
      })
    })
  }
};

export const login: AppThunk = (form: TUser) => {

  return function(dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST
    })
    fetch(`${BASEURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(checkResponse)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: LOGIN_SUCCESS,
          form: res.user
        })
        const accessToken = res.accessToken.split('Bearer ')[1];
        setCookie('token', accessToken, { path: '/' });
        localStorage.setItem('token', res.refreshToken);
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_FAILED
      })
    })
  }
};

export const logout: AppThunk = () => {

  return function(dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST
    })
    fetch(`${BASEURL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      })
    })
    .then(checkResponse)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: LOGOUT_SUCCESS,
        })
        deleteCookie('token');
        localStorage.removeItem('token'); 
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGOUT_FAILED
      })
    })
  }
};

export const getUser: AppThunk = () => {
  
  return function(dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST
    })
    fetch(`${BASEURL}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('token')
      }    
    })
    .then(checkResponse)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          form: res.user,
        })
      } else {
        updateToken();       
        getUser();    
      }
    })
    .catch(err => {
      if (err.message === 'jwt expired') {
        updateToken();
        getUser();
      }
      console.log(err)
      dispatch({
        type: GET_USER_FAILED
      });
    })
    .finally(() => {
      dispatch({
        type: AUTH_CHECKED
      });
    });
  }
}

/*
export const getUser: AppThunk = () => {
  
  return function(dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST
    })
    fetch(`${BASEURL}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('token')
      }    
    })
    .then(checkResponse)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          form: res.user,
        })
      } else {
        dispatch(updateToken())
        .then(() => {
          dispatch(getUser())
        })
      }
    })
    .catch(err => {
      if (err.message === 'jwt expired') {
        dispatch(updateToken())
        .then(() => {
          dispatch(getUser())
        })
      }
      console.log(err)
      dispatch({
        type: GET_USER_FAILED
      });
    })
    .finally(() => {
      dispatch({
        type: AUTH_CHECKED
      });
    });
  }
}
*/


export const updateUser: AppThunk = (form: TUser) => {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST
    })
    fetch(`${BASEURL}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('token')
      },
      body: JSON.stringify(form)    
    })
    .then(checkResponse)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          form: res.user
        })
      }
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: UPDATE_USER_FAILED
      });
    })
  }
};

export const updateToken: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_TOKEN_REQUEST
    })
    fetch(`${BASEURL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'token': `${localStorage.getItem('token')}`
      })    
    })
    .then(checkResponse)
    .then(res => {
      if (res && res.success) {
        const accessToken = res.accessToken.split('Bearer ')[1];
        setCookie('token', accessToken, { path: '/' });
        localStorage.setItem('token', res.refreshToken);  
        dispatch({
          type: UPDATE_TOKEN_SUCCESS
        })
      }
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        type: UPDATE_TOKEN_FAILED
      })
    })
  }
};