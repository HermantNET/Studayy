// Dependencies
import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Reducers
import * as reducers from './reducers/index.js';
const reducer = combineReducers(reducers);

// Store
const store = createStore(reducer);

// Components
import Main from './components/smart/Main.js';

// Application entry
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}