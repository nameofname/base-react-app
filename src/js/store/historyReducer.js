import { UPDATE_URL } from './actions';

const defaultState = {
    url: ''
};

export default function historyReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_URL:
            return Object.assign({}, state, { url: action.payload });
        default:
            return state;
    }
}
