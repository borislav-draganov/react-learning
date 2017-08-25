export const notes = (state = [], action) => {
    switch (action.type) {
        case 'NOTES_RECEIVED_DATA':
            console.log('>> NOTES_RECEIVED_DATA', action.notes)
            return action.notes;
        default:
            return state;
    }
};