import get from 'lodash.get';

const defaultState = {
    isLoading: false,
    exampleData: null,
    errorMessages: []
};

export function asyncReducer(state = defaultState, action) {
    switch (action.type) {
        case 'DATA_LOADING':
            return Object.assign({}, state, {
                data: ['loading']
            });

        case 'DATA_ERROR':
            return {
                errorMessages: [
                    'TODO ! I want to do this better can i use object spread?'
                ]
            };

        default:
            return state;
    }
}
