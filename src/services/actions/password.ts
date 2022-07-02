import { BASEURL, checkResponse } from '../../utils/constants';
import { AppThunk, AppDispatch } from '../types/index';
import { TUser } from '../types/data';

export const FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS:'FORGOT_PASSWORD_SUCCESS' = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED: 'FORGOT_PASSWORD_FAILED' = 'FORGOT_PASSWORD_FAILED';
export const SET_FORGOT_PASSWORD: 'SET_FORGOT_PASSWORD' = 'SET_FORGOT_PASSWORD';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';
export const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD';

export interface IForgotPasswordAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
  form: TUser;
}

export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export interface ISetForgotPasswordAction {
  readonly type: typeof SET_FORGOT_PASSWORD;
  payload: TUser;
}

export interface IResetPasswordAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  form: TUser;
}

export interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED;
}

export interface ISetNewPasswordAction {
  readonly type: typeof SET_NEW_PASSWORD;
  payload: TUser;
}

export type TForgotPasswordActions =
  | IForgotPasswordAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction
  | ISetForgotPasswordAction;

export type TResetPasswordActions =
  | IResetPasswordAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction
  | ISetNewPasswordAction;


export const forgotPassword: AppThunk = (form: TUser) => {

  return function(dispatch: AppDispatch) {
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

export const resetPassword: AppThunk = (form: TUser) => {

  return function(dispatch: AppDispatch) {
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