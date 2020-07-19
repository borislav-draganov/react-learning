import * as React from "react";
import {Note} from "../../models/index";

interface NoteProps {
    note: Note;
}

export class NoteItem extends React.PureComponent<NoteProps> {
    render() {
        const {note} = this.props;

        return (
            <div>
                <span>ID:</span> {note.id} <br />
                <span>Note:</span> {note.text}
            </div>
        )
    }
}