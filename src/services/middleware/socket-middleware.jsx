//import { getCookie } from "../../utils/constants";

export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { 
        wsInit, 
        wsInitUser,
        onOpen, 
        onClose, 
        onError, 
        onMessage } = wsActions;    

        if (type === wsInit) {
          socket = new WebSocket(`${wsUrl}/all`);
        } else if (type === wsInitUser && payload?.token) {
          socket = new WebSocket(`${wsUrl}?token=${payload.token}`);
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