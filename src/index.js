/*Here we importing our app and the rendering him*/
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import configureStore from './store/configureStore';

const store = configureStore();
console.log('store state', store.getState());
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);