export const OPEN_MODAL ='OPEN_MODAL';
export const CLOSE_MODAL ='CLOSE_MODAL';

// ActionsCreator
export function getCurrentIngredient(cardData) {
  return function(dispatch) {
    dispatch({
    type: OPEN_MODAL,
    payload: cardData
    })
  };
};