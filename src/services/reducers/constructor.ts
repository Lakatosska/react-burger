import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SHIFT_INGREDIENT,
  RESET_CONSTRUCTOR,
  TConstructorActions
} from '../actions/constructor';

import { TIngredient } from '../types/data';


interface IConstructorState {
  constructorItems: ReadonlyArray<TIngredient>;
  bun: TIngredient | string | any;
}

const initialConstructorState: IConstructorState = {
  constructorItems: [], 
  bun: '',
};

export const constructorReducer = (state = initialConstructorState, action: TConstructorActions): IConstructorState => {

  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.payload.type === 'bun') {
        return {...state, bun: action.payload}
      }
      return {
        ...state,
        constructorItems:[...state.constructorItems, action.payload],
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        constructorItems: [...state.constructorItems].filter((_, index) => index !== action.payload),
      };
    }
    case SHIFT_INGREDIENT: {
      const array = [...state.constructorItems];
      array.splice(action.payload.to, 0, ...array.splice(action.payload.from, 1))
      return {
        ...state,
        constructorItems: [...array],
      }
    }
    case RESET_CONSTRUCTOR: {
      return {
        constructorItems: [], 
        bun: '',
      }
    }
    default:
      return state;
  }
}