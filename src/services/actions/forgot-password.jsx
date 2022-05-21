import { BASEURL, checkResponse } from '../../utils/constants';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';
export const SET_FORGOT_PASSWORD = 'SET_FORGOT_PASSWORD';

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