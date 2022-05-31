import { combineReducers } from 'redux';
import { ingredientsReducer, 
        orderReducer, 
        currentIngredientReducer,
        constructorReducer,
} from './index';

import { 
  userReducer 
} from './auth';

import { 
  forgotPasswordReducer 
} from './forgot-password';

import { 
  resetPasswordReducer 
} from './reset-password';


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  currentIngredient: currentIngredientReducer,
  constructorItems: constructorReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
});
