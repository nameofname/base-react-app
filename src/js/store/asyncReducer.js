import { FETCH_POLITICS } from './actions';

const defaultState = {
    data: ['no data']
};

export default function uiReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_POLITICS:
            return Object.assign({}, state, {
                data: ['loading']
            });

        default:
            return state;
    }
}
