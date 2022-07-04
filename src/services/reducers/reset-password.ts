import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SET_NEW_PASSWORD,
  TResetPasswordActions
} from '../actions/password';
import { TUser } from '../types/data';

interface IResetPasswordState {
  form: TUser,
  resetPasswordSuccess: boolean,
}


const initialResetPasswordState: IResetPasswordState = {
  form: {
    password: '',
    token: '',
  },
  resetPasswordSuccess: false
};

export const resetPasswordReducer = (state = initialResetPasswordState, action: TResetPasswordActions): IResetPasswordState => {

  switch (action.type) {
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        form: action.form,
        resetPasswordSuccess: true
      };
    }
    case SET_NEW_PASSWORD: {
      return {
        ...state,
        form: action.payload,
      };
    }
    default:
      return state;
  }
}