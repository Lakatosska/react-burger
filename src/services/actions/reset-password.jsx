import { BASEURL, checkResponse } from '../../utils/constants';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';
export const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD';

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