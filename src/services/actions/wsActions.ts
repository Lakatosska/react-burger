export const WS_CONNECTION_START: 'WS_CONNECTION_START'  = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';

export interface IWSConectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWSConectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWSConectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
}

export type TWSActions =
  | IWSConectionStartAction
  | IWSConectionSuccessAction
  | IWSConectionErrorAction
  | IWSConectionClosedAction
  | IWSGetMessageAction;