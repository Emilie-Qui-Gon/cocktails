// Ici, on définira notre composant Header

// Importe React
import React from 'react';

// on définit notre composant
// Un composant est une fonction qui renvoit du JSX
const Header = () => (
  <header className="header">
    <img src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Crêpes raffinées" className="header__image" />

    <div className="header__content">
      <h1 className="header__title">Crêpes raffinées</h1>
      <h2 className="header__infos">John Deuf - Facile</h2>
    </div>
  </header>
);

// on exporte notre composant pour le
// rendre disponible à l'extérieur
// on utilise un export par défaut pour exporter notre composant
export default Header;
