// src/redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Adjust the path based on your actual structure

const store = createStore(rootReducer);

export default store;

