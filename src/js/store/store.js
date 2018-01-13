import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import asyncReducer from './asyncReducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    async: asyncReducer
});

function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware)
    );
}

export default configureStore();
