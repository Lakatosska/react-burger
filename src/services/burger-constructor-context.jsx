import { createContext } from 'react';

//export const BurgerConstructorContext = React.createContext();

export const OrderTotalContext = createContext(null); // для блока итоговой стоимости
export const PlaceOrderContext = createContext(); // для кнопки оформить заказ