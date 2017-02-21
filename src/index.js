/**
 * App composed from:
 * 	- Canvas this is the place where will rotate, move and etc our pictures
 *	- ImageLoader this is the place where will change load pictures, change colours\ filters, add titles
 * Here we importing our app and the rendering him
 */
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import App from './containers/App';

render(
    <App />,
  document.getElementById('root')
)