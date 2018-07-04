import {
    DATA_LOADING,
    TICKERS_RECEIVED,
    CORRELATIONS_RECEIVED,
    ALL_CORRELATIONS_RECEIVED
} from './actions';
import get from 'lodash.get';

const defaultState = {
    tickers: [],
    correlations: [],
    allCorrelations: []
    // TODO ! should i be storing tickers from correlations endpoint here as well ? data is redundant.
};

function cleanCorrelations(payload) {
    let correlations = get(payload, 'correlations', []);
    return correlations
        .filter(({ pair = [] }) => pair[0] !== pair[1])
        .sort(({ value: valueA }, { value: valueB }) => {
            if (valueA > valueB) {
                return -1;
            }
            if (valueA < valueB) {
                return 1;
            }
            return 0;
        });
}

export default function uiReducer(state = defaultState, action) {
    switch (action.type) {
        case DATA_LOADING:
            return Object.assign({}, state, {
                data: ['loading']
            });

        case TICKERS_RECEIVED:
            const tickerArr = get(action.payload, 'tickers', []);
            return Object.assign({}, state, {
                tickers: tickerArr
            });

        case CORRELATIONS_RECEIVED:
            return Object.assign({}, state, {
                correlations: cleanCorrelations(action.payload)
            });

        case ALL_CORRELATIONS_RECEIVED:
            return Object.assign({}, state, {
                allCorrelations: cleanCorrelations(action.payload)
            });

        default:
            return state;
    }
}
