// == Import npm
import React from 'react';

// == Imports locaux
import './styles.css';
// on importe le/les composant(s) nécessaire(s)
import Header from '../Header';
// Pour les imports, on peut utiliser un chemin relatif depuis 
// le fichier courant comme ci-dessus
// ou un chemin depuis la racine du projet comme ci-dessous
// import Header from 'src/components/Header';

// == Composant
// on peut noter que pour définir la classe d'un élément,
// on doit utiliser l'attribut className
//
// Une fois les composant importés, on peut les utiliser
// pour produire notre UI
const App = () => (
  <div className="app">
    <Header />
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
