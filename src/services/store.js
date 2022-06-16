import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../services/reducers/rootReducer';
import thunk from 'redux-thunk';
import { socketMiddleware } from './middleware/socket-middleware';
import { wsUrl } from '../utils/constants';

import {
  WS_CONNECTION_START,
  WS_CONNECTION_START_USER,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
} from './actions/wsActions';

const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsInitUser: WS_CONNECTION_START_USER,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE, 
};

// Redux DevTools 
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 

// расширитель хранилища (thunk - чтобы экшены могли быть не только объектами, но и функциями, в т.ч. асинхронными)
const enhancer = composeEnhancers(applyMiddleware(
    thunk, 
    socketMiddleware(wsUrl, wsActions))
  );

// инициализируем хранилище
export const store = createStore(rootReducer, enhancer)

