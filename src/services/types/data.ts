export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
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
*/