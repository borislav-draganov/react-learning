export default (state = [], action) => {
    switch (action.type) {
        case 'NOTES_RECEIVED_DATA':
            return action.notes;
        default:
            return state;
    }
};