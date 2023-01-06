import React from 'react';

import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import './index.css';

const container = document.getElementById("root");
const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = createRoot(container); 

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/* ReactDOM.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>,
  document.getElementById("root")
); */


