import { format, formatDistanceToNowStrict, isToday, isYesterday } from "date-fns";
import { ru } from "date-fns/locale";


export const BASEURL = 'https://norma.nomoreparties.space/api';
export const wsUrl = 'wss://norma.nomoreparties.space/orders';

export function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, props) {
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

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}

export const placeOrderDate = (date) => {

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

//console.log(placeOrderDate('2022-05-11T18:32:51.823Z'))