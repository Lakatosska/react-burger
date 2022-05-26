import { BASEURL, checkResponse } from '../../utils/constants';
import { deleteCookie } from '../../utils/constants';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

// POST https://norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.

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
      } else {
        dispatch({
          type: LOGOUT_FAILED
        })
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGOUT_FAILED
      })
    })
  }
}