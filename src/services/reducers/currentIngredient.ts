import { 
  CLOSE_MODAL, 
  OPEN_MODAL,
  TModalActions
} from '../actions/currentIngredient';

import { TIngredient } from '../types/data';


interface ICurrentIngredientState {
  currentIngredient: TIngredient | null;
}


const initialCurrentIngredientState: ICurrentIngredientState = {
  currentIngredient: null, 
};

export const currentIngredientReducer = (state = initialCurrentIngredientState, action: TModalActions): ICurrentIngredientState => {

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
