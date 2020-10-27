import { combineReducers } from 'redux';
import { NotesSlice } from './slices/notes.slice';

const rootReducer = combineReducers({
    notes: NotesSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
