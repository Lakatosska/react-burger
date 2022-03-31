import React from 'react';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientDetailsStyles from './ingredient-details.module.css';

const IngredientDetails = ({ ingredients }) => {
  const { image, name, calories, proteins, fat, carbohydrates } = ingredients;
  //console.log(ingredients[0]);
 

  return(
    <article className={`${ingredientDetailsStyles.container} p-10`}>
      <h1 className={`${ingredientDetailsStyles.title} text text_type_main-large mt-3`}>Детали ингредиента</h1>
      <img src={image} alt={name} />
      <span className={'text text_type_main-medium mt-4 mb-8'}>{name}</span>
      
    </article>
  );
}

/*
const IngredientDetails = ({ ingredients }) => {
  const { image_large, name, calories, proteins, fat, carbohydrates } = ingredients;
  //console.log(ingredients[0]);
 

  return(
    <article className={`${ingredientDetailsStyles.container} p-10`}>
      <h1 className={`${ingredientDetailsStyles.title} text text_type_main-large mt-3`}>Детали ингредиента</h1>
      <img src={image_large} alt={name} />
      <span className={'text text_type_main-medium mt-4 mb-8'}>{name}</span>
      <ul className={ingredientDetailsStyles.nutrients}>
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
      <button className={ingredientDetailsStyles.button} type='button'>
        <CloseIcon type="primary" />
      </button>
    </article>
  );
}
*/
export default IngredientDetails;
