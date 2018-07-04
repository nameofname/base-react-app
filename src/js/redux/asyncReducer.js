// import get from 'lodash.get';

const defaultState = {
    isLoading: false,
    exampleData: null,
    errorMessages: []
};

// TODO !!!
export function asyncReducer(state = defaultState, action) {
    switch (action.type) {
        case 'DATA_LOADING':
            return Object.assign({}, state, {
                isLoading: true
            });

        case 'DATA_ERROR':
            return {
                errorMessages: [
                    'TODO ! I want to do this better can i use object spread?'
                ]
            };

        case 'EXAMPLE_RECEIVED':
            return Object.assign({}, state, {
                exampleData: action.payload
            });

        default:
            return state;
    }
}
