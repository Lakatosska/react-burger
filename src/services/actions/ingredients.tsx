import { BASEURL, checkResponse } from '../../utils/constants';
import { TIngredient } from '../types/data';
import { AppThunk, AppDispatch } from '../types';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: Array<TIngredient>;
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}


const getLoadingIngredients = (): IGetIngredientsAction => (
  {
    type: GET_INGREDIENTS_REQUEST,
  }
);

const getReceivedIngredients = (value: Array<TIngredient>): IGetIngredientsSuccessAction => (
  {
    type: GET_INGREDIENTS_SUCCESS,
    payload: value
  }
);

const getIngredientsFailed = (): IGetIngredientsFailedAction => (
  {
    type: GET_INGREDIENTS_FAILED
  }
);

export type TIngredientsActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction;


export const getIngredients: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(getLoadingIngredients())
    fetch(`${BASEURL}/ingredients`)
    .then(checkResponse)
    .then(res  => {
      if (res && res.success) {
        dispatch(getReceivedIngredients(res.data))
      } else {
        dispatch(getIngredientsFailed)
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(getIngredientsFailed)
    })
  }
};