export type TIngredient = {
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly __v: number;
  readonly id?: string;
};

/*
"_id":"60666c42cc7b410027a1a9b1",
"name":"Краторная булка N-200i",
"type":"bun",
"proteins":80,
"fat":24,
"carbohydrates":53,
"calories":420,
"price":1255,
"image":"https://code.s3.yandex.net/react/code/bun-02.png",
"image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
"image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
"__v":0
*/

export type TUser = {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
}

/*
name: '',
email: '',
password: '',
token: ''
*/

export type TOrder = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: 'created' | 'pending' | 'done';
  updatedAt: string;
  _id: string;
};

/*
createdAt: "2022-07-02T22:58:27.519Z"
ingredients: (5) ['60d3b41abdacab0026a733c6', '60d3b41abdacab0026a733c6', '60d3b41abdacab0026a733cb', '60d3b41abdacab0026a733d1', '60d3b41abdacab0026a733cf']
name: "Фалленианский антарианский био-марсианский краторный бургер"
number: 19109
status: "done"
updatedAt: "2022-07-02T22:58:27.728Z"
_id: "62c0cd9342d34a001c273b9d"
*/

export type TOrdersStatus = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
  wsConnected: boolean;
};

/*
orders: (50) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 19022
totalToday: 101
wsConnected: false
*/

export type TType = 'bun' | 'main' | 'sauce';

export interface ILocationState {
  from: string;
}