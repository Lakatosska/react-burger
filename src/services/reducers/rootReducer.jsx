import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { currentIngredientReducer } from './currentIngredient';
import { constructorReducer } from './constructor';
import { userReducer } from './auth';
import { forgotPasswordReducer } from './forgot-password';
import { resetPasswordReducer } from './reset-password';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  currentIngredient: currentIngredientReducer,
  constructorItems: constructorReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
});
