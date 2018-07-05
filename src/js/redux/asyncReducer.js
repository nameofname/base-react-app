const defaultState = {
    isLoading: false,
    image: null,
    fields: [],
    template_name: [],
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

        case 'HS_LOADED':
            console.log('action.payload', action.payload);
            return {
                ...state,
                image: action.payload.image,
                fields: action.payload.fields,
                template_name: action.payload.template_name
            };

        default:
            return state;
    }
}
