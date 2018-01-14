import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import asyncReducer from './asyncReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    async: asyncReducer,
    history: historyReducer
});

export default createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));
