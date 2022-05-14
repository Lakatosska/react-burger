import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';

import appStyles from '../components/app/app.module.css';

export const HomePage = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <main className={appStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor /> 
      </main>
    </DndProvider>
  );
};