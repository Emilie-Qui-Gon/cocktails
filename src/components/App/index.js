// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// == Imports locaux
import './app.scss';






const App = ({ recipes }) => {
  console.log(recipes);

  const { slug } = useParams();
  const matchedRecipe = recipes.find((recipe) => recipe.slug === slug);
  console.log(matchedRecipe);


  return (
    <div className="presentation">
      <div className="header">
        <div className="site-name">
          <NavLink className="nav"
            to="/"
            exact>
            <h1>Coocktails Art</h1>
          </NavLink>
        </div>
        <div className="menu">
          <NavLink className="nav"
            to="/"
            exact>
            Mon travail
          </NavLink>
          <NavLink className="nav"
            to="/contact"
            exact>
            Contact
          </NavLink>
        </div>
      </div>

      <div key={matchedRecipe.id} className="recette">

        <header className="recette-header">
          <img
            src={matchedRecipe.thumbnail}
            alt={matchedRecipe.title}
            className="recette-header__image"
          />

          <div className="recette-header__content">
            <h1 className="recette-header__title">{matchedRecipe.title}</h1>
            <h2 className="recette-header__infos"> - {matchedRecipe.difficulty} -</h2>
          </div>
        </header>
      </div>

      <ul className="ingredients">
        {matchedRecipe.ingredients.map((ingredient) => (
          <li className="ingredient" key={ingredient.id}>
            <span className="ingredient-quantity">
              {ingredient.quantity} {ingredient.unit}
            </span> {ingredient.name}
          </li>
        ))}
      </ul>

      <ol className="steps">
        {matchedRecipe.instructions.map((instruction) => (

          <li key={instruction} className="step">
            {instruction}
          </li>

        ))}
      </ol>

      <div className="footer">
        <p className="text-footer insta">@coocktails-art</p>
        <p className="text-footer copy">All rights reserved</p>
      </div>
    </div>

  )
};

// == Export
export default App;
