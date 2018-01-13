import { UPDATE_TEXT } from './actions';

const defaultState = {
    text: 'state from redux'
};

export default function uiReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_TEXT:
            return Object.assign({}, state, { text: action.payload });
        default:
            return state;
    }
}
