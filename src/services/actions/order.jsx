import { BASEURL, checkResponse } from '../../utils/constants';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export function getOrder() {
  return function(dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    })
    fetch(`${BASEURL}/orders`)
    .then(checkResponse)
    .then( res  => {
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: res.order.number

        })
        console.log(res.order.number)
      } else {
        dispatch({
          type: GET_ORDER_FAILED
        })
      }
    })
    .catch( err => {

      dispatch({
          type: GET_ORDER_FAILED
      })
    })
  }
};