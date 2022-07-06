import { v4 as uuid4 } from 'uuid';

import { TIngredient } from '../types/data';

export const ADD_INGREDIENT: 'ADD_INGREDIENT' ='ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const SHIFT_INGREDIENT: 'SHIFT_INGREDIENT' = 'SHIFT_INGREDIENT';
export const RESET_CONSTRUCTOR: 'RESET_CONSTRUCTOR' = 'RESET_CONSTRUCTOR';


export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: object | TIngredient | any;
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: number;
}

export interface ISortIngredientAction {
  readonly type: typeof SHIFT_INGREDIENT;
  readonly payload: {
    from: number,
    to: number
  };
}

export interface IResetConstructorAction {
  readonly type: typeof RESET_CONSTRUCTOR;
}

export type TConstructorActions =
  | IAddIngredientAction
  | IDeleteIngredientAction
  | ISortIngredientAction
  | IResetConstructorAction;


export const addToConstructor = (ingredient: TIngredient, index?: number): IAddIngredientAction => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      ...ingredient,
      id: uuid4(),
      index
    }
  };
};  
  
export const deleteIngredient = (index: number): IDeleteIngredientAction => (
  {
    type: DELETE_INGREDIENT,
    payload: index
  }
);

export const sortIngredient = (fromIndex: number, toIndex: number): ISortIngredientAction => (
  {
    type: SHIFT_INGREDIENT,
    payload: {
      from: fromIndex, 
      to: toIndex,
    },
  }
);