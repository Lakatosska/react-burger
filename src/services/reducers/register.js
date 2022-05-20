import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  SET_REGISTER
} from '../actions/register';

const initialRegisterState = {
  form: {
    name: '',
    email: '',
    password: ''
  },
  registerRequest: false,
  registerFailed: false
};


export const registerReducer = (state = initialRegisterState, action) => {

  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        form: action.form
      };
    }
    case SET_REGISTER: {
      return {
        ...state,
        form: action.payload
      };
    }
    default:
      return state;
  }
}
