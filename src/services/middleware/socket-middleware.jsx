import { getCookie } from "../../utils/constants";

export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const token = getCookie('token').split("Bearer ")[1];
      const { 
        wsInit, 
        wsInitUser,
        wsSendMessage, 
        onOpen, 
        onClose, 
        onError, 
        onMessage } = wsActions;
      //const { user } = getState().user;
    

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
      };

      if (type === wsInitUser && token) {
        socket = new WebSocket(`${wsUrl}?token=${token}`);
      };

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

      if (type === wsSendMessage) {
        const message = { ...payload, token: token }
        socket.send(JSON.stringify(message));
      }

      next(action);
    };
  };
};