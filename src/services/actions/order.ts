import { BASEURL, checkResponse, getCookie } from '../../utils/constants';
import { RESET_CONSTRUCTOR } from './constructor';
import { AppThunk, AppDispatch } from '../types';

export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';
export const RESET_ORDER: 'RESET_ORDER' = 'RESET_ORDER';

export interface IGetOrderAction {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly order: number;
}

export interface IGetOrderFailedAction {
  readonly type: typeof GET_ORDER_FAILED;
}
export interface IResetOrderAction {
  readonly type: typeof RESET_ORDER;
}

export type TOrderActions =
  | IGetOrderAction
  | IGetOrderSuccessAction
  | IGetOrderFailedAction
  | IResetOrderAction;


export const postOrder: AppThunk = (Ids: string[]) => {

  return function(dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    })
    fetch(`${BASEURL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getCookie('token')
      },
      body: JSON.stringify({
        ingredients: Ids
      })
    })
    .then(checkResponse)
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: res.order.number
        })
        dispatch({ 
          type: RESET_CONSTRUCTOR
        });
      } else {
        dispatch({
          type: GET_ORDER_FAILED
        })
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ORDER_FAILED
      })
    })
  }
};