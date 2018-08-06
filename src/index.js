import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import "./main.css";
import ToDoList from "./ToDoList/ToDoList";
import reducer from './redusers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
																		window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {console.log('subscride - works', store.getState());});

ReactDOM.render(
	<Provider store={store}>
		<ToDoList />
	</Provider>,
	document.getElementById('root')
);