import { Middleware } from 'redux';

import { getCookie } from "../../utils/constants";
import { TWsActions } from '../store';
import { RootState } from '../types';


export const socketMiddleware = (wsUrl: string, wsActions: TWsActions): Middleware => {
  return store => {
    let socket: WebSocket | null = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { 
        wsInit, 
        onOpen, 
        onClose, 
        onError, 
        onMessage } = wsActions;    

        if (action.user && type === wsInit) {
          socket = new WebSocket(`${wsUrl}?token=${getCookie('token')}`);
        } else if (type === wsInit) {
          socket = new WebSocket(`${wsUrl}${payload}`);
        }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  };
};