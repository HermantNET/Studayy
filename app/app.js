// Dependencies
import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Reducers
import reducers from '../reducers/index.js';
const reducer = combineReducers(reducers);

// Store
const store = createStore(reducer);

// Application entry
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}