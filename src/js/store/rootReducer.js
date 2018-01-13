import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import asyncReducer from './asyncReducer';

const rootReducer = combineReducers({
    uiReducer,
    asyncReducer
});

export default rootReducer;
