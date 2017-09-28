import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <FriendListApp />
        </Provider>
      </div>
    );
  }
}
