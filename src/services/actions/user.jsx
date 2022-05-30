import { BASEURL, checkResponse, getCookie, setCookie } from '../../utils/constants';

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
export const RESET_TOKEN = 'RESET_TOKEN';

//POST https://norma.nomoreparties.space/api/auth/token - эндпоинт обновления токена.

export function getUser() {
  
  return function(dispatch) {
    dispatch({
      type: GET_USER_REQUEST
    })
    fetch(`${BASEURL}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('token')
      }    
    })
    .then(checkResponse)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          form: res.user
          //payload: res.user
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
  }
};

export function updateUser(form) {
  return function(dispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST
    })
    fetch(`${BASEURL}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('token')
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
      } else {
        dispatch({
          type: UPDATE_USER_FAILED
        });
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
        token: localStorage.getItem('token'),
      })    
    })
    .then(checkResponse)
    .then(res => {
      if (res && res.success) {
        setCookie('token', res.accessToken);
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
}


