import * as React from "react";
import {Note} from "../../models/index";
import {NoteItem} from "./Note";

interface NotesListProps {
    notes: Note[];
}

export class NoteList extends React.PureComponent<NotesListProps> {
    render() {
        return (
            this.props.notes.map((note, i) =>
                <NoteItem note={note} key={i}/>
            )
        )
    }
}