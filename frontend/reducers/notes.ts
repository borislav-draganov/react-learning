let defaultState = {
    isFetching: false,
    items: [],
};

export const notes = (state = defaultState, action) => {
    switch (action.type) {
        case 'NOTES_REQUESTED_DATA':
            return Object.assign({}, state, {
                isFetching: true,
            });
        case 'NOTES_RECEIVED_DATA':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.notes,
            });
        default:
            return state;
    }
};