// import get from 'lodash.get';

const defaultState = {
    isLoading: false,
    exampleData: null,
    errorMessages: []
};

export function asyncReducer(state = defaultState, action) {
    switch (action.type) {
        case 'DATA_LOADING':
            return {
                ...state,
                isLoading: true
            };

        case 'DONE_LOADING':
            return {
                ...state,
                isLoading: false
            };

        case 'DATA_ERROR':
            console.log('error', action.payload);
            return {
                ...state,
                errorMessages: [action.payload]
            };

        case 'EXAMPLE_RECEIVED':
            return {
                ...state,
                exampleData: action.payload
            };

        default:
            return state;
    }
}
