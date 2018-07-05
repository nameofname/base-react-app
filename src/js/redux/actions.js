import fetch from 'cross-fetch';
import { Router } from '../router/Router';

const serviceHost = process.env.REACT_APP_SERVICE_HOST;
const router = new Router();

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

export function fetchExample(string) {
    return dispatch => {
        fetchHelper(dispatch, `/api/fakeOne?id=${string}`)
            .then(json => {
                dispatch(dataReceived('EXAMPLE_ONE', json));
                router.navigate(json.id);
            })
            .catch(err => {
                dispatch(doneLoading());
                dispatch(dataError(err));
            });
    };
}

export function fetchExampleTwo(string) {
    return dispatch => {
        fetchHelper(dispatch, `/api/fakeOne?id=${string}`)
            .then(json => {
                dispatch(dataReceived('EXAMPLE_ONE', json));
                router.navigate(json.id);
            })
            .catch(err => {
                dispatch(doneLoading());
                dispatch(dataError(err));
            });
    };
}
