import * as React from 'react';
import NoteComponent from '../note/note.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root-reducer';
import { useEffect } from 'react';
import { getNotes } from '../../store/thunks/notes.thunk';

export const NoteListComponent: React.FC = () => {
    const dispatch = useDispatch();

    const notes = useSelector((state: RootState) => state.notes.notes);

    useEffect(() => {
        dispatch(getNotes());
    }, []);

    return (
        <>
            {notes.map((note, i) => (
                <NoteComponent note={note} key={i} />
            ))}
        </>
    );
};
