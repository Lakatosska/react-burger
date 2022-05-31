import { combineReducers } from 'redux';
import { ingredientsReducer, 
        orderReducer, 
        currentIngredientReducer,
        constructorReducer,
} from './index';

import { 
  userReducer 
} from './auth';


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  currentIngredient: currentIngredientReducer,
  constructorItems: constructorReducer,
  user: userReducer,
});
