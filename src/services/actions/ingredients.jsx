import { BASEURL, checkResponse } from '../../utils/constants';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

// ActionsCreator
export const getLoadingIngredients = () => (
  {
    type: GET_INGREDIENTS_REQUEST,
  }
);

export const setReceivedIngredients = (value) => (
  {
    type: GET_INGREDIENTS_SUCCESS,
    payload: value
  }
);

export const getNonresponseIngredients = () => (
  {
    type: GET_INGREDIENTS_FAILED
  }
);

export const getIngredients = () => {
  return function(dispatch) {
    dispatch(getLoadingIngredients())
    fetch(`${BASEURL}/ingredients`)
    .then(checkResponse)
    .then(res  => {
      if (res && res.success) {
        dispatch(setReceivedIngredients(res.data))
      } else {
        dispatch(getNonresponseIngredients)
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(getNonresponseIngredients)
    })
  }
};