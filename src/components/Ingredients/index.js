import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';

import './ingredients.scss';

// on map sur nos ingredients
// pour chacun d'entre eux, on retourne un Ingrédient (notre sous composant)
// auquel on transmet les bonnes props
// Ici, on n'a pas besoin de prendre la responsabilité de verifier
// et de transmettre une à une les props de Ingredient, on ne fait que les transmettre
// au sous composant qui aura la charge de les valider et les utiliser
const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {
      ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          {...ingredient}
        />
      ))
    }
  </ul>
);

Ingredients.propTypes = {
  // c'est un tableau
  // ingredients: PropTypes.array.isRequired,
  // c'est un tableau d'objets
  // ingredients: PropTypes.arrayOf(
  //   PropTypes.object.isRequired,
  // ).isRequired,
  // c'est même un tableau d'objets qui ont une certaine forme (shape)
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

};

export default Ingredients;
