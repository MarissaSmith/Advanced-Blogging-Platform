// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here as your project grows
});

export default rootReducer;

