import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import asyncReducer from './asyncReducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    async: asyncReducer
});

export default createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));
