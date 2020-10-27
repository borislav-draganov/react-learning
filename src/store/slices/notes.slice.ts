import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../../models';

export interface BambooAuthSlice {
    notes: Array<Note>;
}

const initialState: BambooAuthSlice = {
    notes: [],
};

export const NotesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (state, { payload }: PayloadAction<Array<Note>>) => {
            state.notes = payload;
        },
    },
});
