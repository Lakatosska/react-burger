import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import { socketMiddleware } from './middleware/socket-middleware';
import { wsUrl } from '../utils/constants';

import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
} from './actions/wsActions';

export type TWsActions = {
  wsInit: typeof WS_CONNECTION_START,
  onOpen: typeof WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof WS_CONNECTION_ERROR,
  onMessage: typeof WS_GET_MESSAGE, 
}

const wsActions: TWsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE, 
};

// расширитель хранилища (thunk - чтобы экшены могли быть не только объектами, но и функциями, в т.ч. асинхронными)
const enhancer = composeWithDevTools(applyMiddleware(
    thunk, 
    socketMiddleware(wsUrl, wsActions))
  );

// инициализируем хранилище
export const store = createStore(rootReducer, enhancer);