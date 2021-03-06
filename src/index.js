import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import WebFont from 'webfontloader';

import configureStore from './app/flux/configureStore';
import Routes from './app/routes';
import * as serviceWorkersManager from './serviceWorkersManager';


const createdBrowserHistory = createBrowserHistory();

const initialState = {};
const store = configureStore(initialState, createdBrowserHistory);

const mountPoint = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={createdBrowserHistory}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  mountPoint
);

WebFont.load({
  google: {
    families: ['Lato']
  }
});

serviceWorkersManager.register();

if (module.hot) {
  module.hot.accept();
}

// https://scotch.io/tutorials/how-to-make-your-existing-react-app-progressive-in-10-minutes
// https://survivejs.com/webpack/building/bundle-splitting/

// chrome://flags/#enable-desktop-pwas
// chrome://flags#enable-app-banners
