import { AppThunk, AppDispatch } from '../types';
import { TIngredient } from "../types/data";


export const OPEN_MODAL: 'OPEN_MODAL' = 'OPEN_MODAL';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';

export interface IGetCardOpenAction {
  readonly type: typeof OPEN_MODAL;
  readonly payload: TIngredient;
}

export interface IGetCardCloseAction {
  readonly type: typeof CLOSE_MODAL;
}

const getCardOpen = (value: TIngredient): IGetCardOpenAction => (
  {
    type: OPEN_MODAL,
    payload: value
  }
);

export type TModalActions =
  | IGetCardOpenAction
  | IGetCardCloseAction;

export const getCurrentIngredient: AppThunk = (cardData) => {
  return function(dispatch: AppDispatch) {
    dispatch(getCardOpen(cardData))
  };
};