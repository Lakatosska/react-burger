import ingredientDetailsStyles from './ingredient-details.module.css';
import { cardPropTypes } from '../../utils/prop-types';


const IngredientDetails = ({ ingredients }) => {
  const { image_large, name, calories, proteins, fat, carbohydrates } = ingredients;
 
  return(
    <article className={ingredientDetailsStyles.container}>
      <img src={image_large} alt={name} />
      <span className='text text_type_main-medium mt-4 mb-8'>{name}</span>
      <ul className={`${ingredientDetailsStyles.nutrients} mb-15`}>
        <li className={ingredientDetailsStyles.nutrient}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Калории,ккал</p>
          <span className='text text_type_main-default text_color_inactive'>{calories}</span>
        </li>
        <li className={ingredientDetailsStyles.nutrient}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Белки, г</p>
          <span className='text text_type_main-default text_color_inactive'>{proteins}</span>
        </li>
        <li className={ingredientDetailsStyles.nutrient}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Жиры, г</p>
          <span className='text text_type_main-default text_color_inactive'>{fat}</span>
        </li>
        <li className={ingredientDetailsStyles.nutrient}>
          <p className='text text_type_main-default text_color_inactive mb-2'>Углеводы, г</p>
          <span className='text text_type_main-default text_color_inactive'>{carbohydrates}</span>
        </li>
      </ul>
    </article>
  );
}

IngredientDetails.propTypes = {
  ingredients: cardPropTypes.isRequired,
};

export default IngredientDetails;
