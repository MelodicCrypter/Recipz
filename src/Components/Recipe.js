import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <p><h6>Calories: </h6> {calories}</p>
            <ol>
                {ingredients.map(ingred => (
                    <li>{ingred.text}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
