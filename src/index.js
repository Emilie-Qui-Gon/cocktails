
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from 'src/components/Home';


const rootReactElement = (
    
      <Router>
        <Home />
      </Router>
 
  );

const target = document.getElementById('root');

render(rootReactElement, target);
