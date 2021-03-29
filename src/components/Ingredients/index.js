import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';

import './ingredients.scss';

// on map sur nos ingredients
// pour chacun d'entre eux, on retourne un Ingrédient (notre sous composant)
// auquel on transmet les bonnes props
const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {
      ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          quantity={ingredient.quantity}
          unit={ingredient.unit}
          name={ingredient.name}
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
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

};

export default Ingredients;
