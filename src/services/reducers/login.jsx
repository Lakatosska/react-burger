import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_LOGIN_USER
} from '../actions/login';

const initialLoginState = {
  form: {
    email: '',
    password: ''
  },
  loginRequest: false,
  loginFailed: false,
  isLogin: false,
  accessToken: ''
};


export const loginReducer = (state = initialLoginState, action) => {

  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
        isLogin: false
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        isLogin: true
        //form: action.form
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
        isLogin: false
      };
    }
    case SET_LOGIN_USER: {
      return {
        ...state,
        form: action.payload
      };
    }
    default:
      return state;
  }
}