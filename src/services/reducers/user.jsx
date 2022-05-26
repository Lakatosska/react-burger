import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  SET_UPDATE_USER,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED,
  RESET_TOKEN
} from '../actions/user';

const initialUserState = {
  form: {
    name: '',
    email: '',
    password: ''
  },

  userRequest: false,
  userFailed: false,

  updateTokenRequest: false,
  updateTokenFailed: false,
  
};


export const userReducer = (state = initialUserState, action) => {

  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        form: action.form
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
        userFailed: false,
        userRequest: false,
        // form: action.form,
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