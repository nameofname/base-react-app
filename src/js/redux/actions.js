import get from 'lodash.get';
import fetch from 'cross-fetch';

// const serviceHost = process.env.REACT_APP_SERVICE_HOST;

// US URL: https://raw.githubusercontent.com/hyperscience/interview-problems/master/taskRequest_1.json
function fetchHelper(dispatch, uri) {
    dispatch(dataLoading());
    return fetch(uri)
        .then(r => r.json())
        .then(json => {
            dispatch(doneLoading());
            return json;
        })
        .catch(err => {
            dispatch(doneLoading());
            dispatch(dataError(err));
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

export function dataError(error) {
    let payload;

    if (typeof error === 'string') {
        payload = error;
    } else {
        try {
            payload = error.message;
        } catch (e) {
            payload = 'A service error occurred';
        }
    }

    return { type: 'DATA_ERROR', payload };
}

const hsUrl =
    'https://raw.githubusercontent.com/hyperscience/interview-problems/master/taskRequest_1.json';
export function fetchExample(string) {
    return dispatch => {
        fetchHelper(dispatch, hsUrl).then(json => {
            // debugger;
            const image = get(json, 'input_payload.image');
            const fields = get(json, 'input_payload.fields');
            dispatch(dataReceived('HS_LOADED', { image, fields }));
        });
    };
}
