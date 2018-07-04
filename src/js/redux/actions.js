import fetch from 'cross-fetch';

const serviceHost = process.env.REACT_APP_CLIENT_SERVICE_HOST;

function fetchHelper(dispatch, uri) {
    dispatch(dataLoading());
    return fetch(`${serviceHost}/${uri}`).then(r => r.json());
}

function dataReceived(type, payload) {
    return { type, payload };
}

function dataLoading() {
    return { type: 'DATA_LOADING' };
}

// TODO!!!!!!!! - implement error handling.
export function dataError(error) {
    return { type: 'DATA_ERROR', error };
}

export function fetchExample(string) {
    return dispatch => {
        fetchHelper(dispatch)
            .then(json => dispatch(dataReceived('EXAMPLE_RECEIVED', json)))
            .catch(err => dispatch(dataError(err)));
    };
}
