import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from '../services/types';
import { BurgerIngredients } from '../components/burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../components/burger-constructor/burger-constructor';
import { Loader } from '../components/loader/loader';
import appStyles from '../components/app/app.module.css';

export const HomePage: FC = () => {

  const { ingredientsRequest } = useSelector(store => store.ingredients);

  if (ingredientsRequest) return <Loader />

  return (
    <DndProvider backend={HTML5Backend}>
      <main className={appStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor /> 
      </main>
    </DndProvider>
  );
};