import fetch from 'cross-fetch';

const serviceHost = process.env.REACT_APP_SERVICE_HOST;

// another example can be found at : https://www.reddit.com/r/politics.json
function fetchHelper(dispatch, uri) {
    dispatch(dataLoading());
    return fetch(`${serviceHost}${uri}`)
        .then(r => r.json())
        .then(json => {
            dispatch(doneLoading());
            return json;
        });
}

function dataReceived(type, payload) {
    return { type, payload };
}

function dataLoading() {
    return { type: 'DATA_LOADING' };
}

function doneLoading() {
    return { type: 'DONE_LOADING' };
}

// TODO!!!!!!!! - implement error handling.
export function dataError(error) {
    return { type: 'DATA_ERROR', error };
}

export function fetchExample(string) {
    return dispatch => {
        fetchHelper(dispatch, `/api/fakeApi?id=${string}`)
            .then(json => dispatch(dataReceived('EXAMPLE_RECEIVED', json)))
            .catch(err => dispatch(dataError(err)));
    };
}
