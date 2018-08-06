import { combineReducers } from 'redux';

import list from './list';
import menu from './menu';
import modal from './modal';

export default combineReducers({
	list,
	menu,
	modal
})