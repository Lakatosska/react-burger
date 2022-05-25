import { BASEURL, checkResponse, getCookie, setCookie } from '../../utils/constants';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';


export function getUser() {

  return fetch(`${BASEURL}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('accessToken'),
      }    
    })
    .then(checkResponse)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
   
  }
getUser()

