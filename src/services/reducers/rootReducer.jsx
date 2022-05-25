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

import { 
  logoutReducer 
} from './logout';

import { 
  userReducer 
} from './user';


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  currentIngredient: currentIngredientReducer,
  constructorItems: constructorReducer,
  register: registerReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  login: loginReducer,
  logout: logoutReducer,
  user: userReducer
});
