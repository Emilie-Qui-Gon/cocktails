// Ici, on définira notre composant Header

// On Importe React
import React from 'react';

// On importe notre feuille de style
import './header.scss';

// on définit notre composant
// Un composant est une fonction qui renvoit du JSX
// les propriiéts transmises lors de l'instanciation du composant
// sont récupéré dans l'objet props, paramètre de notre fonction composant
const Header = (props) => {
  // on peut voir qu'il s'agit d'un objet possédant ici 4 propriétés
  console.log(props);

  // on peut se servir de ces données pour contruire notre UI
  return (
    <header className="header">
      <img src={props.thumbnail} alt="Crêpes raffinées" className="header__image" />

      <div className="header__content">
        <h1 className="header__title">Crêpes raffinées</h1>
        <h2 className="header__infos">John Deuf - Facile</h2>
      </div>
    </header>
  );
};

// on exporte notre composant pour le
// rendre disponible à l'extérieur
// on utilise un export par défaut pour exporter notre composant
export default Header;
