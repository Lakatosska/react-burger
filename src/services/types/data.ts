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

export type TUser = {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
};

export type TOrder = {
  readonly createdAt: string;
  readonly ingredients: Array<string>;
  readonly name: string;
  readonly number: number;
  readonly status: 'created' | 'pending' | 'done';
  readonly updatedAt: string;
  readonly _id: string;
};

export type TOrdersStatus = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
  wsConnected: boolean;
};

export type TType = 'bun' | 'main' | 'sauce';

export interface ILocationState {
  from: string;
};