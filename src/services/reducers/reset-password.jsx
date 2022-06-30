import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SET_NEW_PASSWORD
} from '../actions/password';

const initialResetPasswordState = {
  form: {
    password: '',
    token: '',
  },
  resetPasswordSuccess: false
};

export const resetPasswordReducer = (state = initialResetPasswordState, action) => {

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