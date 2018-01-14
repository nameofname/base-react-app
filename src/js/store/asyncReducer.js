import { DATA_LOADING, DATA_RECEIVED } from './actions';
import get from 'lodash.get';

const defaultState = {
    data: ['no data']
};

export default function uiReducer(state = defaultState, action) {
    switch (action.type) {
        case DATA_LOADING:
            return Object.assign({}, state, {
                data: ['loading']
            });

        case DATA_RECEIVED:
            const dataArr = get(action.payload, 'data.children', []);
            return Object.assign({}, state, {
                data: dataArr.map(o => {
                    return get(o, 'data', 'no message.');
                })
            });

        default:
            return state;
    }
}
