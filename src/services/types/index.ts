import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

import { store } from '../store';
import { TIngredientsActions } from '../actions/ingredients';


export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
type TApplicationActions = 
| TIngredientsActions;


// Типизация thunk
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch; 


// Теперь этот хук знает структуру хранилища
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

// Хук не даст отправить экшен, который ему не знаком
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>(); 
