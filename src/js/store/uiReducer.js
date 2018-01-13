import { UPDATE_TEXT } from './actions';

const defaultState = {
    text: 'state from redux'
};

export default function uiActions(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_TEXT:
            return Object.assign({}, state, { text: action.payload });
        default:
            return state;
    }
}
