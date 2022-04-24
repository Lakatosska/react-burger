export const BASEURL= 'https://norma.nomoreparties.space/api';

export function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const burgerBoilerplate = [
  {"_id":"60d3b41abdacab0026a733c6","name":"Краторная булка N-200i","type":"bun","proteins":80,"fat":24,"carbohydrates":53,"calories":420,"price":1255,"image":"https://code.s3.yandex.net/react/code/bun-02.png","image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png","image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png","__v":0},
  {"_id":"60d3b41abdacab0026a733c8","name":"Филе Люминесцентного тетраодонтимформа","type":"main","proteins":44,"fat":26,"carbohydrates":85,"calories":643,"price":988,"image":"https://code.s3.yandex.net/react/code/meat-03.png","image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png","image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png","__v":0},
  {"_id":"60d3b41abdacab0026a733ce","name":"Соус традиционный галактический","type":"sauce","proteins":42,"fat":24,"carbohydrates":42,"calories":99,"price":15,"image":"https://code.s3.yandex.net/react/code/sauce-03.png","image_mobile":"https://code.s3.yandex.net/react/code/sauce-03-mobile.png","image_large":"https://code.s3.yandex.net/react/code/sauce-03-large.png","__v":0},
]