import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
} from '../actions/forgot-password';

const initialForgotPasswordState = {
  form: {
    email: ''
  },
  forgotPasswordRequest: false,
  forgotPasswordFailed: false
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
        form: action.form
      };
    }
    default:
      return state;
  }
}