// == Import npm
import React from 'react';

// == Imports locaux
import './app.scss';
// on importe le/les composant(s) nécessaire(s)
import Header from '../Header';
import Steps from '../Steps';
import Ingredients from '../Ingredients';

// ici, on peut choisir le nom de la variable pour récupérer

import recipeData from '../../data/recipe';

console.log(recipeData);

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

// Pour rendre notre composant header configurable
// il doit être en mesure de recevoir 4 arguments :
// title, author, thumb, difficulty
// on passe les informations à notre header par l'indermédiaires des 
// propriétés de Header
const App = () => (
  <div className="app">
    <Header
      author={recipeData.author}
      title={recipeData.title}
      thumbnail={recipeData.thumbnail}
      difficulty={recipeData.difficulty}
    />
    <Ingredients />
    <Steps steps={recipeData.instructions} />
  </div>
);

// == Export
export default App;
