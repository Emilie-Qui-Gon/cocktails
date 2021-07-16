
import React from 'react';
import { render } from 'react-dom';

import Home from 'src/components/Home';


const rootReactElement = <Home />;

const target = document.getElementById('root');

render(rootReactElement, target);
