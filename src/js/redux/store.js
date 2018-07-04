import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import { asyncReducer } from './asyncReducer';

const rootReducer = combineReducers({
    async: asyncReducer
});

export default createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));
