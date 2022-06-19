import { getCookie } from "../../utils/constants";

export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

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