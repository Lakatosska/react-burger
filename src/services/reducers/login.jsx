import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_LOGIN
} from '../actions/login';

const initialLoginState = {
  form: {
    email: '',
    password: ''
  },
  loginRequest: false,
  loginFailed: false
};


export const loginReducer = (state = initialLoginState, action) => {

  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        form: action.form
      };
    }
    case SET_LOGIN: {
      return {
        ...state,
        form: action.payload
      };
    }
    default:
      return state;
  }
}