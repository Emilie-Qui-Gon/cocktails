// == Import npm
import React from 'react';

// == Import
import './styles.css';

// == Composant
// on peut noter que pour définir la classe d'un élément,
// on doit utiliser l'attribut className
const App = () => (
  <div className="app">
    <header>
      <h1>Crêpes raffinées</h1>
    </header>
    <ul>
      <li>Ingédient 1</li>
      <li>Ingédient 2</li>
    </ul>
    <ul>
      <li>Etape 1</li>
      <li>Etape 2</li>
      <li>Etape 3</li>
    </ul>
  </div>
);

// == Export
export default App;
