import { 
  CLOSE_MODAL, 
  OPEN_MODAL 
} from '../actions/currentIngredient';


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
