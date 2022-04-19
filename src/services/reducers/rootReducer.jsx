import { combineReducers } from 'redux';
import { ingredientsReducer, orderReducer, currentIngredientReducer } from './index';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  currentIngredient: currentIngredientReducer
});
