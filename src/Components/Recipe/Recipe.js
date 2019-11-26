import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <p className={style.calories}><span className={style.caloriesSpan}>Calories: </span> {calories.toFixed(4)}</p>
            <ol className={style.lists}>
                {ingredients.map(ingred => (
                    <li>{ingred.text}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
