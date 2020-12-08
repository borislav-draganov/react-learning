import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteComponent from '../note/note.component';
import { RootState } from '../../store/root-reducer';
import { getNotes } from '../../store/thunks/notes.thunk';

export const NoteListComponent: FC = () => {
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
