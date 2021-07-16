// == Import npm
import React, { useEffect } from 'react';

import { Route, Switch, useLocation} from 'react-router-dom';

import Presentation from 'src/components/Presentation';
import App from 'src/components/App';
import Contact from 'src/components/Contact';



// == Imports locaux
import './home.scss';

import recipeData from '../../data/recipe';

// console.log(recipeData);


const Home = () => {


  const location = useLocation();

  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [location],
  );

    return (

        <div className="home">

            
                <Switch>

                    <Route path="/" exact>
                        <Presentation recipes={recipeData} />
                    </Route>
                    <Route path="/contact" exact>
                        <Contact />
                    </Route>
                    <Route path="/:slug" exact >
                        <App recipes={recipeData} />
                    </Route>



                </Switch>
       

        </div>
    )
};

// == Export
export default Home;
