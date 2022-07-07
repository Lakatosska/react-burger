import { FC } from 'react';
//import { useParams } from 'react-router-dom';
import IngredientDetails from '../components/ingredient-details/ingredient-details';
import styles from './style.module.css';


export const IngredientPage: FC = () => {

  //const { id } = useParams<{ id: string }>();

  return (
    <div className={styles.modalPage}>
      <h1 className='text text_type_main-large mt-30'>Детали ингредиента</h1>
      <IngredientDetails/>
    </div>
  );
};