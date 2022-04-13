export const BASEURL= 'https://norma.nomoreparties.space/api';

export function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}