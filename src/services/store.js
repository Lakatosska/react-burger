import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../services/reducers/rootReducer';
import thunk from 'redux-thunk';

// Redux DevTools 
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 

// расширитель хранилища
const enhancer = composeEnhancers(applyMiddleware(thunk));

// инициализируем хранилище
export const store = createStore(rootReducer, enhancer)