const defaultState = {
    text: 'state from redux'
};

export default function uiReducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
