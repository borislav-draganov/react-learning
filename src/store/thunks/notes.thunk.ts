import { AppThunk } from '../store';
import { NotesSlice } from '../slices/notes.slice';

export const getNotes = (): AppThunk => async (dispatch) => {
    dispatch(
        NotesSlice.actions.setNotes([
            {
                id: 1,
                text: 'First note',
            },
            {
                id: 2,
                text: 'Second note',
            },
        ]),
    );
};
