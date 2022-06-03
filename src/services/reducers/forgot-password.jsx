import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  SET_FORGOT_PASSWORD
} from '../actions/forgot-password';

const initialForgotPasswordState = {
  form: {
    email: ''
  },
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  forgotPasswordSuccess: false
};


export const forgotPasswordReducer = (state = initialForgotPasswordState, action) => {

  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        form: action.form,
        forgotPasswordSuccess: true,
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