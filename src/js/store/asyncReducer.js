import {
    DATA_LOADING,
    TICKERS_RECEIVED,
    CORRELATIONS_RECEIVED
} from './actions';
import get from 'lodash.get';

const defaultState = {
    tickers: [],
    correlations: []
    // TODO ! should i be storing tickers from correlations endpoint here as well ? data is redundant.
};

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
            const correlations = get(action.payload, 'correlations', []);
            return Object.assign({}, state, {
                correlations
            });

        default:
            return state;
    }
}
