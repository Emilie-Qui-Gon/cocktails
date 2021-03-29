// Ici, on définira notre composant Header

// On Importe React
import React from 'react';
// on importe PropTypes depuis la librairie prop-types
// cela va nous pemrettre d'effectuer une validation dynamique de nos props
import PropTypes from 'prop-types';

// On importe notre feuille de style
import './header.scss';

// on définit notre composant
// Un composant est une fonction qui renvoit du JSX
// les propriiéts transmises lors de l'instanciation du composant
// sont récupéré dans l'objet props, paramètre de notre fonction composant
// équivalent à let {title, thumbnail, author, difficulty} = props
const Header = ({title, thumbnail, author, difficulty}) => (
  <header className="header">
    <img
      src={thumbnail}
      alt={title}
      className="header__image"
    />

    <div className="header__content">
      <h1 className="header__title">{title}</h1>
      <h2 className="header__infos">{author} - {difficulty}</h2>
    </div>
  </header>
);

// grâce à Proptypes, on va pouvoir valider le
// type de nos props et définir si elles sont obligatoires ou pas
// à noter :
// - la propriété à ajouter à notre composant est bien écrite en camelCase
Header.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

// on exporte notre composant pour le
// rendre disponible à l'extérieur
// on utilise un export par défaut pour exporter notre composant
export default Header;
