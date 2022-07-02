import { 
  CLOSE_MODAL, 
  OPEN_MODAL,
  TModalActions
} from '../actions/currentIngredient';

import { TIngredient } from '../types/data';


type TCurrentIngredientState = {
  currentIngredient: TIngredient | null;
}


const initialCurrentIngredientState: TCurrentIngredientState = {
  currentIngredient: null, 
};

export const currentIngredientReducer = (state = initialCurrentIngredientState, action: TModalActions): TCurrentIngredientState => {

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
        currentIngredient: null
      }
    }
    default:
      return state;
  }
}
