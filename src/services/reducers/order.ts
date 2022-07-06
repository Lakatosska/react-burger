import { ReactNode } from 'react';

import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  RESET_ORDER,
  TOrderActions
} from '../actions/order';
import { TOrder } from '../types/data';

interface IOrderState {
  order: TOrder | null | any;
  orderRequest: boolean;
  orderFailed: boolean;
}

const initialOrderState: IOrderState = {
  order: null,
  orderRequest: false,
  orderFailed: false
};

export const orderReducer = (state = initialOrderState, action: TOrderActions): IOrderState => {

  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      }
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        order: action.order,
      }
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      }
    }
    case RESET_ORDER: {
      return {
        ...state,
        order: null,
        orderFailed: true,
        orderRequest: false,
      }
    }
    default:
      return state;
  }
}