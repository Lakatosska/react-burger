import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SET_REGISTER_USER,

  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_LOGIN_USER,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,

  GET_USER_REQUEST,
  GET_USER_SUCCESS,

  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  SET_UPDATE_USER,
  CANCEL_UPDATE_USER,

  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED,

  AUTH_CHECKED,

  TAuthActions

} from '../actions/auth';
import { TUser } from '../types/data';

interface IAuthState {
  form: TUser,

  isAuth: boolean,
  isAuthChecked: boolean,

  registerRequest: boolean,
  registerFailed: boolean,

  loginRequest: boolean,
  loginFailed: boolean,

  logoutRequest: boolean,
  logoutFailed: boolean,

  userRequest: boolean,
  userFailed: boolean,

  updateTokenRequest: boolean,
  updateTokenFailed: boolean,
}


const initialUserState: IAuthState = {
  form: {
    name: '',
    email: '',
    password: '',
  },

  isAuth: false,
  isAuthChecked: false,

  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  logoutRequest: false,
  logoutFailed: false,

  userRequest: false,
  userFailed: false,

  updateTokenRequest: false,
  updateTokenFailed: false,
};


export const userReducer = (state = initialUserState, action: TAuthActions): IAuthState => {

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
        form: action.payload,
        isAuth: true,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
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
      };
    }
    case SET_LOGIN_USER: {
      return {
        ...state,
        form: action.payload,
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
        form: initialUserState.form,
        isAuth: false,        
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        
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
        isAuth: true,
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
        isAuth: true,
      };
    }
    case UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        updateTokenRequest: false,
        updateTokenFailed: true,
      };
    }
    case AUTH_CHECKED: {
      return {
        ...state,
        isAuthChecked: true
      }
    }
  
    default:
      return state;
  }
}