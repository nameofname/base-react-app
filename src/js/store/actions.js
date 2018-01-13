import fetch from 'cross-fetch';

export const UPDATE_TEXT = 'UPDATE_TEXT';
export function updateText(payload) {
    return { type: UPDATE_TEXT, payload };
}

export const DATA_LOADING = 'DATA_LOADING';
export function dataLoading() {
    return { type: DATA_LOADING };
}

export const DATA_RECEIVED = 'DATA_RECEIVED';
export function dataReceived(data) {
    return { type: DATA_RECEIVED, payload: data };
}

// export const FETCH_POLITICS = 'FETCH_POLITICS';
export function fetchPolitics() {
    return dispatch => {
        dispatch(dataLoading());
        return fetch(`https://www.reddit.com/r/politics.json`)
            .then(response => response.json())
            .then(json => dispatch(dataReceived(json)));
    };
}
