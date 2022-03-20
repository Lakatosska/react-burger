import React from "react";

import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import bun02 from '../../images/bun-02.png'

const ConstructorItems = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        //thumbnail={img}
        thumbnail={bun02}
      />
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        //thumbnail={img}
        thumbnail={bun02}
      />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        //thumbnail={img}
        thumbnail={bun02}
      />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        //thumbnail={img}
        thumbnail={bun02}
      />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        //thumbnail={img}
        thumbnail={bun02}
      />
    </div>
  );
}


const Order = () => {
  return(
    <>
      <div>
        <span>610</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button type="primary" size="large">
        Оформить заказ
      </Button>
    </>

  );
}

const BurgerConstructor = () => {
  return(
    <>
      <ConstructorItems />
      <Order />
    </>
  );
}

export default BurgerConstructor;