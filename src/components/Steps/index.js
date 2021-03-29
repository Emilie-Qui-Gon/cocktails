import React from 'react';
import PropTypes from 'prop-types';

import './steps.scss';

const Steps = ({ steps }) => {
  // on récupère dans steps un tableau de chaines de caractères (cf PropTypes)
  // grâce à la fonction map,
  // on va transformer ce tableau de chaines de caractères en un tableau de JSX
  // on injectera le tableau obtenu dans le JSX retourné par notre composant

  // A noter :
  // On doit ajouter aux éléments produits par une boucle un attribut 
  // key qui a deux caractéristiques :
  // - être unique,
  // - être stable dans le temps
  // Si on a à disposition un identifiant, parfait, sinon, le contenu lui même
  // peut faire office de clé.
  // Dans tous les cas, il est fortement déconseillé d'utiliser l'index
  const stepsLi = steps.map(
    (step) => <li key={step} className="steps__item">{step}</li>,
  );

  /*
  équivalent à :
  function transformStringToJSXLi(stringValue) {
    const JSXLiValue = <li className="steps__item">{stringValue}</li>;
    return JSXLiValue;
  }

  const stepsLi = steps.map(transformStringToJSXLi);
  */

  // on peut du coup injecter notre props steps dans le JSX, c'est un tableau de string
  return (
    <ol className="steps">
      {stepsLi}
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
