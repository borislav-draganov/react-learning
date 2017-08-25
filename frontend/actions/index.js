import request from "request-promise-native";

const getNotes = () => (dispatch) => request('http://localhost:8080/api/notes').then((data) => {
    let notes = JSON.parse(data);
    dispatch(receivedData(notes))
});

export const receivedData = (notes) => ({
    type: 'NOTES_RECEIVED_DATA',
    notes
});

export const getData = () => (dispatch) => dispatch(getNotes());