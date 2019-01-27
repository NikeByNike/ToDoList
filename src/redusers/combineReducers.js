import {combineReducers} from 'redux';

import listState from './listState';
import menuState from './menuState';
import modalState from './modalState';

export default combineReducers({
  listState,
  menuState,
  modalState,
});
