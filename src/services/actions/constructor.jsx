import { v4 as uuid4 } from 'uuid';

export const ADD_INGREDIENT ='ADD_INGREDIENT';
export const DELETE_INGREDIENT ='DELETE_INGREDIENT';
export const SHIFT_INGREDIENT ='SHIFT_INGREDIENT';
export const RESET_CONSTRUCTOR ='RESET_CONSTRUCTOR';

// ActionsCreator
export const addToConstructor = (ingredient, index) => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      ...ingredient,
      id: uuid4(),
      index
    }
  };
};

export const sortIngredient = (fromIndex, toIndex) => (
  {
    type: SHIFT_INGREDIENT,
    payload: {
      from: fromIndex, 
      to: toIndex,
    },
  }
)

export const deleteIngredient = (index) => (
  {
    type: DELETE_INGREDIENT,
    payload: index
  }
);