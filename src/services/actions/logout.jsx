import { BASEURL, checkResponse } from '../../utils/constants';
import { setCookie } from '../../utils/constants';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

// POST https://norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.