import fetch from 'cross-fetch';

export const DATA_LOADING = 'DATA_LOADING';
export function dataLoading() {
    return { type: DATA_LOADING };
}

export const DATA_RECEIVED = 'DATA_RECEIVED';
export function dataReceived(data) {
    return { type: DATA_RECEIVED, payload: data };
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
            .then(json => dispatch(dataReceived(json)));
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
            .then(json => dispatch(dataReceived(json)));
    };
}

export const UPDATE_URL = 'UPDATE_URL';
export function updateUrl(uriRef) {
    return { type: DATA_RECEIVED, payload: uriRef };
}
