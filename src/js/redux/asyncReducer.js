const defaultState = {
    isLoading: false,
    exampleOne: null,
    exampleTwo: null,
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

        case 'EXAMPLE_ONE':
            return {
                ...state,
                exampleOne: action.payload
            };

        case 'EXAMPLE_TWO':
            return {
                ...state,
                exampleTwo: action.payload
            };

        default:
            return state;
    }
}
