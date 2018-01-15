import fetch from 'cross-fetch';

/* Action constants : */
export const DATA_LOADING = 'DATA_LOADING';
export const TICKERS_RECEIVED = 'TICKERS_RECEIVED';
export const CORRELATIONS_RECEIVED = 'CORRELATIONS_RECEIVED';
export const ALL_CORRELATIONS_RECEIVED = 'ALL_CORRELATIONS_RECEIVED';
export const DATA_ERROR = 'DATA_ERROR';
export const UPDATE_URL = 'UPDATE_URL';

const serviceHost =
    process.env.REACT_APP_CLIENT_SERVICE_HOST ||
    'http://k-fe-practical.herokuapp.com';

/* Helpers : */
function fetchCorrelationsHelper(dispatch, tickerArr) {
    // shared code for fetching correlations :
    dispatch(dataLoading());
    const queryString = tickerArr.map(str => `tickers=${str}`).join('&');
    return fetch(`${serviceHost}/api/correlation/?${queryString}`).then(
        response => response.json()
    );
}

function dataReceived(type, payload) {
    // util for receiving different peices of information :
    return { type, payload };
}

/* Action functions : */
export function dataLoading() {
    return { type: DATA_LOADING };
}

export function dataError(data) {
    // TODO!!!!!!!! - implement error handling.
    return { type: DATA_ERROR };
}

export function fetchTickers() {
    return dispatch => {
        dispatch(dataLoading());
        return fetch(`${serviceHost}/api/tickers/`)
            .then(response => response.json())
            .then(json => dispatch(dataReceived(TICKERS_RECEIVED, json)));
    };
}

export function fetchCorrelations(tickerArr) {
    return dispatch => {
        fetchCorrelationsHelper(dispatch, tickerArr).then(json =>
            dispatch(dataReceived(CORRELATIONS_RECEIVED, json))
        );
    };
}

export function fetchAllCorrelations(allTickersArr) {
    return dispatch => {
        fetchCorrelationsHelper(dispatch, allTickersArr).then(json =>
            dispatch(dataReceived(ALL_CORRELATIONS_RECEIVED, json))
        );
    };
}

// TODO !!! implement full routing.
export function updateUrl(uriRef) {
    return { type: UPDATE_URL, payload: uriRef };
}
