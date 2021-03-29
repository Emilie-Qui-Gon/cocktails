import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ quantity, unit, name }) => (
  <li className="ingredients__item">
    <span className="ingredients__item__qty">{quantity} {unit}</span>
    <span className="ingredients__item__ingredient">{name}</span>
  </li>
);

Ingredient.propTypes = {
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Ingredient;
