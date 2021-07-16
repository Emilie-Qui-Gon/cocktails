// == Import npm
import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';
// import store from 'src/store';

import Presentation from 'src/components/Presentation';
import App from 'src/components/App';
import Contact from 'src/components/Contact';



// == Imports locaux
import './home.scss';

import recipeData from '../../data/recipe';

// console.log(recipeData);


const Home = () => {

    return (

        <div className="home">

            <Router>
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
            </Router>


        </div>
    )
};

// == Export
export default Home;
