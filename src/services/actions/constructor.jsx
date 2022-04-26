import { v4 as uuid4 } from 'uuid';

export const ADD_INGREDIENT ='ADD_INGREDIENT';
export const DELETE_INGREDIENT ='DELETE_INGREDIENT';
export const RESET_INGREDIENT ='RESET_INGREDIENT';
export const REPLACE_BUN ='REPLACE_BUN';

// ActionsCreator
export const addToConstructor = (ingredient, index) => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      ...ingredient,
      id: uuid4(),
      index,
    }
  }
}

export const deleteIngredient = (index) => (
  {
    type: DELETE_INGREDIENT,
    payload: {
      index
    }
  }
)