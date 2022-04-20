
import { CLOSE_MODAL, OPEN_MODAL } from '../actions/currentIngredient';

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

// ingredientsReducer

const initialState2 = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState2, action) => {
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

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = initialState, action) => {

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

const initialState3 = {
  currentIngredient: null,
  
};

export const currentIngredientReducer = (state = initialState3, action) => {

  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        currentIngredient: action.cardData
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