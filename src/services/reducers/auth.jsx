import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  SET_REGISTER_USER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_LOGIN_USER,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  SET_FORGOT_PASSWORD,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  SET_NEW_PASSWORD,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  SET_UPDATE_USER,
  CANCEL_UPDATE_USER,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED,
} from '../actions/auth';

const initialUserState = {
  form: {
    name: '',
    email: '',
    password: '',
    token: '',
  },

  isAuth: false,

  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,
  isLogin: false,
  accessToken: '',

  logoutRequest: false,
  logoutFailed: false,

  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  forgotPasswordSuccess: false,

  resetPasswordSuccess: false,

  userRequest: false,
  userFailed: false,

  updateTokenRequest: false,
  updateTokenFailed: false,
};


export const userReducer = (state = initialUserState, action) => {

  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        form: action.form,
        isAuth: true,
      };
    }
    case SET_REGISTER_USER: {
      return {
        ...state,
        form: action.payload
      };
    }
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
        form: action.form,
        loginRequest: false,
        loginFailed: false,
        isAuth: true,
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
    case LOGOUT_REQUEST: {
      return {
        ...state,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: false,        
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        
      };
    }
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
        form: action.payload
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        form: action.form,
        isAuth: true,
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
        userFailed: false,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        form: action.form,
        userFailed: false,
        userRequest: false,
      };
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        userFailed: true,
        userRequest: false,
      };
    }
    case SET_UPDATE_USER: {
      return {
        ...state,
        form: action.payload,
        isAuth: true,
      };
    }
    case CANCEL_UPDATE_USER: {
      return {
        ...state,
        form: initialUserState.form,
      };
    }
    case UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        updateTokenRequest: true,
        updateTokenFailed: false,
      };
    }
    case UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        updateTokenRequest: false,
        updateTokenFailed: false,
      };
    }
    case UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        updateTokenRequest: false,
        updateTokenFailed: true,
      };
    }
  
    default:
      return state;
  }
}