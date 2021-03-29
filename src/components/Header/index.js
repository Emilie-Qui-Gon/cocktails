// Ici, on définira notre composant Header

// Importe React
import React from 'react';

// on définit notre composant
// Un composant est une fonction qui renvoit du JSX
const Header = () => (
  <header className="header">
    Je suis le composant Header
  </header>
);

// on exporte notre composant pour le
// rendre disponible à l'extérieur
// on utilise un export par défaut pour exporter notre composant
export default Header;
