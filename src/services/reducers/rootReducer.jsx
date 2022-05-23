import { combineReducers } from 'redux';
import { ingredientsReducer, 
        orderReducer, 
        currentIngredientReducer,
        constructorReducer,
} from './index';

import { 
  registerReducer 
} from './register';

import { 
  forgotPasswordReducer 
} from './forgot-password';

import { 
  resetPasswordReducer 
} from './reset-password';

import { 
  loginReducer 
} from './login';


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  currentIngredient: currentIngredientReducer,
  constructorItems: constructorReducer,
  register: registerReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  login: loginReducer
});
