// == Import npm
import React from 'react';

import { NavLink } from 'react-router-dom';

// == Imports locaux
import './presentation.scss';





const Presentation = ({ recipes }) => {
    // console.log(recipes);

    return (
        <div className="presentation">
            <div className="header">
                <div className="site-name">
                    <NavLink className="nav"
                        to="/"
                        exact>
                        <h1>Coocktails Art</h1>
                    </NavLink>
                </div>
                <div className="menu">
                    <NavLink className="nav"
                        to="/"
                        exact>
                        Mon travail
                    </NavLink>
                    <NavLink className="nav"
                        to="/contact"
                        exact>
                        Contact
                    </NavLink>
                </div>
            </div>
            <div className="box-cards">

                {recipes.map((recipe) => (
                    <NavLink className="item"
                        to={`/${recipe.slug}`}
                        key={recipe.id}
                        exact>
                        <div className="item-content">
                            <img src={recipe.thumbnail} />
                            <h1 className="title-item">{recipe.title}</h1>
                        </div>
                    </NavLink>
                ))}

            </div>
            <div className="footer">
                <p className="text-footer insta">@coocktails-art</p>
                <p className="text-footer copy">All rights reserved</p>
            </div>
        </div>
    )
}
    ;

// == Export
export default Presentation;
