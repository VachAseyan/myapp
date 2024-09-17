// src/store/reducers/index.js
import { combineReducers } from 'redux';
import productTypeReducer from './productTypeReducer.js';

const rootReducer = combineReducers({
    productTypeReducer
});

export default rootReducer;
