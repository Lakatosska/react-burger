import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SHIFT_INGREDIENT,
  RESET_CONSTRUCTOR
} from '../actions/constructor';


const initialConstructorState = {
  constructorItems: [], 
  bun: null,
};

export const constructorReducer = (state = initialConstructorState, action) => {

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
        bun: null
      }
    }
    default:
      return state;
  }
}