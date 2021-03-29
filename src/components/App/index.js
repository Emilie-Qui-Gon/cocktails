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
      Composant header
    </header>
    <div>
      Composant Ingredients
    </div>
    <div>
      Composant Steps
    </div>
  </div>
);

// == Export
export default App;
