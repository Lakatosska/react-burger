import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from '../actions/logout';

const initialLogoutState = {
  
  logoutRequest: false,
  logoutFailed: false
};


export const logoutReducer = (state = initialLogoutState, action) => {

  switch (action.type) {
    case LOGOUT_REQUEST: {
      return {
        ...state,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        
      };
    }
    
    default:
      return state;
  }
}