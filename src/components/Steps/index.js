import React from 'react';
import PropTypes from 'prop-types';

import './steps.scss';

const Steps = ({steps}) => {
  console.log(steps);

  // on peut injecter un tableau dans le jsx
  const numbers = [1, 2, 3];

  // on peut injecter du JSX dans du JSX 
  const h1 = <h1>test</h1>;

  // on peut injecter un tableau de JSX dans du JSX
  const ps = [
    <p>P 1</p>,
    <p>P 2</p>,
    <p>P 3</p>,
  ];

  // on peut du coup injecter notre props steps dans le JSX, c'est un tableau de string

  return (
    <ol className="steps">
      <li className="steps__item">Etape {numbers}</li>
      <li className="steps__item">Etape {h1}</li>
      <li className="steps__item">Etape {ps}</li>
      <li className="steps__item">Etape {steps}</li>
    </ol>
  );
};

Steps.propTypes = {
  // on pourrait valider qu'il s'agit d'un tableau !
  // steps: PropTypes.array.isRequired,
  // mais on peut aller plus loin en précisant que nous souhaitons recevoir
  // un tableau de string
  steps: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Steps;
