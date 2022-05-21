import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  SET_FORGOT_PASSWORD
} from '../actions/forgot-password';

const initialForgotPasswordState = {
  form: {
    email: ''
  },
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  forgotPasswordSuccess: true
};


export const forgotPasswordReducer = (state = initialForgotPasswordState, action) => {

  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        form: action.form,
        forgotPasswordSuccess: true
      };
    }
    case SET_FORGOT_PASSWORD: {
      return {
        ...state,
        form: action.payload
      };
    }
    default:
      return state;
  }
}