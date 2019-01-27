import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './main.css';
import ToDoList from './ToDoList/ToDoList';
import combineReducers from './redusers/combineReducers';

const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
                                          window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {console.log('subscribe - works', store.getState());});

ReactDOM.render(
  <Provider store={store}>
    <ToDoList/>
  </Provider>,
  document.getElementById('root')
);
