import { useParams } from 'react-router-dom';
import { useSelector } from '../../services/types';
import ingredientDetailsStyles from './ingredient-details.module.css';


export const IngredientDetails = ({showModal = false}) => {

  const { id } = useParams<{id: string}>();
  const ingredients = useSelector(store => store.ingredients.ingredients);
  const currentIngredient = ingredients.find(ingredient => ingredient._id === id);

  if (!currentIngredient) return null;
 
  return(
    <article className={ingredientDetailsStyles.container}>
      {showModal && <h2 className='text text_type_main-large ml-10 mt-15'>Детали ингредиента</h2>}
      <img src={currentIngredient.image_large} alt={currentIngredient.name} />
      <span className='text text_type_main-medium mt-4 mb-8'>{currentIngredient.name}</span>
      <ul className={`${ingredientDetailsStyles.nutrients} mb-15`}>
        <li className={ingredientDetailsStyles.nutrient}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Калории,ккал</p>
          <span className='text text_type_main-default text_color_inactive'>{currentIngredient.calories}</span>
        </li>
        <li className={ingredientDetailsStyles.nutrient}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Белки, г</p>
          <span className='text text_type_main-default text_color_inactive'>{currentIngredient.proteins}</span>
        </li>
        <li className={ingredientDetailsStyles.nutrient}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Жиры, г</p>
          <span className='text text_type_main-default text_color_inactive'>{currentIngredient.fat}</span>
        </li>
        <li className={ingredientDetailsStyles.nutrient}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Углеводы, г</p>
          <span className='text text_type_main-default text_color_inactive'>{currentIngredient.carbohydrates}</span>
        </li>
      </ul>
    </article>
  );
};