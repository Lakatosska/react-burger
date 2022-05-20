import { BASEURL, checkResponse } from '../../utils/constants';

export const FORGOT_PASSWORD_REQUEST = 'REGISTER_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'REGISTER_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'REGISTER_FAILED';

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