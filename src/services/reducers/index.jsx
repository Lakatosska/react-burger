
import { 
  CLOSE_MODAL, 
  OPEN_MODAL 
} from '../actions/currentIngredient';

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../actions/ingredients';

import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from '../actions/order';

import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SHIFT_INGREDIENT
} from '../actions/constructor';

// ingredientsReducer

const initialIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialIngredientsState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: action.ingredients,
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      }
    }
    default:
      return state;
  }
}

// orderReducer

const initialOrderState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = initialOrderState, action) => {

  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      }
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        order: action.order,
      }
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      }
    }
    default:
      return state;
  }
}

// currentIngredientReducer

const initialCurrentIngredientState = {
  currentIngredient: null, 
};

export const currentIngredientReducer = (state = initialCurrentIngredientState, action) => {

  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        currentIngredient: action.payload
      }
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        currentIngredient: ''
      }
    }
    default:
      return state;
  }
}

// constructorReducer

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
    default:
      return state;
  }
}