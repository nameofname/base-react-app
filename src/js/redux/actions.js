import fetch from 'cross-fetch';

const serviceHost = process.env.REACT_APP_CLIENT_SERVICE_HOST;

/* Helpers : */
function fetchHelper(dispatch, tickerArr) {
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
    return { type: 'DATA_LOADING' };
}

export function dataError(data) {
    // TODO!!!!!!!! - implement error handling.
    return { type: 'DATA_ERROR' };
}

export function fetchCorrelations(tickerArr) {
    return dispatch => {
        fetchHelper(dispatch, tickerArr).then(json =>
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
