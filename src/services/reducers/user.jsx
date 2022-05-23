import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from '../actions/user';

const initialUserState = {
  form: {
    name: '',
    email: '',
    password: ''
  },
  
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
  
    default:
      return state;
  }
}