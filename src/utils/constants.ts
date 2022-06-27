import { format, formatDistanceToNowStrict, isToday, isYesterday } from "date-fns";
import { ru } from "date-fns/locale";


export const BASEURL = 'https://norma.nomoreparties.space/api';
export const wsUrl = 'wss://norma.nomoreparties.space/orders';

/*
interface CustomBody extends Body {
  json(): Promise;
}
*/

export interface CustomResponse extends Body {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly trailer: Promise<Headers>;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response;
}

export function checkResponse(res: CustomResponse): Promise<any> {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

/*
export function checkResponse(res: Response) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
*/



export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name: string, value: string, props?: any) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  setCookie(name, '', { expires: -1 });
}

/*
export function getStorageItem(token: string) {
  return JSON.parse(localStorage.getItem(token));
}
*/

export const placeOrderDate = (date: string) => {

  const dateCreatedAt = new Date(date);

  const day = isToday(dateCreatedAt)
    ? 'Сегодня'
    : isYesterday(dateCreatedAt)
    ? 'Вчера'
    : formatDistanceToNowStrict(dateCreatedAt, {
        unit: 'day',      // кол-во дней, если не 'сегодня-вчера'
        addSuffix: true, // 'назад'
        locale: ru,
      });

  const hours = format(dateCreatedAt, 'p', {locale: ru}); //24-ч 'русская' система
  
  return `${day}, ${hours} i-GMT+3`;
};