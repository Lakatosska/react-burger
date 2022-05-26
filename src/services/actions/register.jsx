import { BASEURL, checkResponse } from '../../utils/constants';
import { setCookie } from '../../utils/constants';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const SET_REGISTER_USER = 'SET_REGISTER_USER';

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
        setCookie('token', res.accessToken);
        localStorage.setItem('token', res.refreshToken);     
      } else {
        dispatch({
          type: REGISTER_FAILED
        })
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