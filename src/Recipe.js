import React, { Component } from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipee}>
      <h1>Recipe "{title}"</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories = {calories.toFixed(2)}</p>
      <img className={style.image} src={image} alt=" " />
    </div>
  );
};

export default Recipe;
