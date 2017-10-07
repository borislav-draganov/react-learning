import * as React from "react";
import NoteItem from "./Note";
import {Note} from "../../models/index";

interface NotesListProps {
    notes: Note[]
}

export default class NoteList extends React.Component<NotesListProps, {}> {
    render() {
        return (
            this.props.notes.map((note, i) =>
                <NoteItem note={note} key={i}/>
            )
        )
    }
}