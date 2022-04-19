import { combineReducers } from 'redux';
import { ingredientsReducer, orderReducer } from './index';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
});
