import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import graph from './graph';

export default combineReducers({
  messages,
  auth,
  graph
});
