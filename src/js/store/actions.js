import fetch from 'cross-fetch';

export const DATA_LOADING = 'DATA_LOADING';
export function dataLoading() {
    return { type: DATA_LOADING };
}

export const TICKERS_RECEIVED = 'TICKERS_RECEIVED';
export const CORRELATIONS_RECEIVED = 'CORRELATIONS_RECEIVED';
// util function for receiving different peices of information :
export function dataReceived(type, payload) {
    return { type, payload };
}

// TODO!!!!!!!! - implement error handling.
export const DATA_ERROR = 'DATA_ERROR';
export function dataError(data) {
    return { type: DATA_ERROR };
}

export function fetchTickers() {
    return dispatch => {
        dispatch(dataLoading());
        return fetch(`http://k-fe-practical.herokuapp.com/api/tickers/`)
            .then(response => response.json())
            .then(json => dispatch(dataReceived(TICKERS_RECEIVED, json)));
    };
}

export function fetchCorrelations(tickerArr) {
    return dispatch => {
        dispatch(dataLoading());
        const queryString = tickerArr.map(str => `tickers=${str}`).join('&');
        return fetch(
            `http://k-fe-practical.herokuapp.com/api/correlation/?${queryString}`
        )
            .then(response => response.json())
            .then(json => dispatch(dataReceived(CORRELATIONS_RECEIVED, json)));
    };
}

// TODO !!! implement full routing.
export const UPDATE_URL = 'UPDATE_URL';
export function updateUrl(uriRef) {
    return { type: UPDATE_URL, payload: uriRef };
}
