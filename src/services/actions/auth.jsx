import { BASEURL, checkResponse, getCookie, setCookie, deleteCookie } from '../../utils/constants';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const SET_REGISTER_USER = 'SET_REGISTER_USER';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SET_LOGIN_USER = 'SET_LOGIN_USER';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';
export const SET_FORGOT_PASSWORD = 'SET_FORGOT_PASSWORD';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';
export const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';
export const SET_UPDATE_USER = 'SET_UPDATE_USER';
export const CANCEL_UPDATE_USER = 'CANCEL_UPDATE_USER';

export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST';
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS';
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED';

export const AUTH_CHECKED = 'AUTH_CHECKED';


export const register = (form) => {

  return function(dispatch) {
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

export const login = (form) => {

  return function(dispatch) {
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

export const logout = () => {

  return function(dispatch) {
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

export const forgotPassword = (form) => {

  return function(dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST
    })
    fetch(`${BASEURL}/password-reset`, {
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
          type: FORGOT_PASSWORD_SUCCESS,
          form: res.user
        })
      
      } else {
        dispatch({
          type: FORGOT_PASSWORD_FAILED
        })
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FORGOT_PASSWORD_FAILED
      })
    })
  }
};

export const resetPassword = (form) => {

  return function(dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    })
    fetch(`${BASEURL}/password-reset/reset`, {
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
          type: RESET_PASSWORD_SUCCESS,
          form: res.user
        })
      } else {
        dispatch({
          type: RESET_PASSWORD_FAILED
        })
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: RESET_PASSWORD_FAILED
      })
    })
  }
};

export function getUser() {
  
  return function(dispatch) {
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


export function updateUser(form) {
  return function(dispatch) {
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

export function updateToken() {
  return function(dispatch) {
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


