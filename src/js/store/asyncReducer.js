import { DATA_LOADING, DATA_RECEIVED } from './actions';
import get from 'lodash.get';

const defaultState = {
    data: [{ title: 'No Data', link: '/' }]
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
                    const obj = get(o, 'data', {});
                    return Object.assign(obj, {
                        link: `http://reddit.com/${obj.permalink}`
                    });
                })
            });

        default:
            return state;
    }
}
