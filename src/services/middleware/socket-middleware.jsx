export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { 
        wsInit, 
        wsInitUser,
        wsSendMessage, 
        onOpen, 
        onClose, 
        onError, 
        onMessage } = wsActions;
      //const { user } = getState().user;

      if (type === wsInit ) {
        socket = new WebSocket(`${wsUrl}/all`);
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
          //const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };
/*
        if (type === wsSendMessage) {
          const message = { ...payload, token: user.token };
          socket.send(JSON.stringify(message));
        }
*/
      }

      next(action);
    };
  };
};