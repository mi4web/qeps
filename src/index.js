import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import {Provider as ReduxProvider} from 'react-redux'
import {HashRouter, BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import configureStore from './store/configureStore';
// import registerServiceWorker from './serviceWorker/registerServiceWorker';

import {initializeGlobalEvent} from "./common/events";

const store = configureStore(window.__REDUX_STATE__ || {});

const AppBundle = (
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ReduxProvider>
);

window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            AppBundle,
            document.getElementById('root')
        );
    });
    initializeGlobalEvent();
};


//registerServiceWorker();
