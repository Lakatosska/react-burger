import { BASEURL, checkResponse } from '../../utils/constants';
import { setCookie } from '../../utils/constants';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SET_LOGIN_USER = 'SET_LOGIN_USER';

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
        const refreshToken = res.refreshToken;
        setCookie(accessToken);
        localStorage.setItem(refreshToken, JSON.stringify(refreshToken)); 
      
      } else {
        dispatch({
          type: LOGIN_FAILED
        })
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