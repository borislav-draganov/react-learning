import * as NotesApi from "../api/notesApi";
import {Note} from "../models/index";

export const requestedData = () => ({
    type: 'NOTES_REQUESTED_DATA'
});

export const receivedData = (notes: Array<Note>) => ({
    type: 'NOTES_RECEIVED_DATA',
    notes
});

export const getAllNotes = () => (dispatch) => {
    dispatch(requestedData());

    NotesApi.getNotes.then((notes: Array<Note>) => {
        dispatch(receivedData(notes))
    })
};