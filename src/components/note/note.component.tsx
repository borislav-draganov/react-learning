import { FC, memo } from 'react';
import styles from './styles.scss';
import { Note } from '../../models';

interface NoteProps {
    note: Note;
}

const NoteComponent: FC<NoteProps> = ({ note }: NoteProps) => {
    return (
        <div className={styles.note}>
            <div>
                <span className={styles.fieldName}>ID:</span> {note.id}
            </div>

            <div>
                <span className={styles.fieldName}>Note:</span> {note.text}
            </div>
        </div>
    );
};

export default memo(NoteComponent);
