// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Imports locaux
import './contact.scss';





const Contact = () => {



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
      <div className="box-contact">
        <h1 className="title-contact">Contact</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

        <p>e-mail@exemple.com</p>

        <p>société de gestion</p>

        <p>e-mail@exemple.com</p>

        <p>archives photo</p>

        <p>e-mail@exemple.com</p>

        <p><i className="fab fa-instagram"></i></p>
      </div>



      <div className="footer-contact">
        <p className="text-footer insta">@coocktails-art</p>
        <p className="text-footer copy">All rights reserved</p>
      </div>
    </div>

  )
};

// == Export
export default Contact;
