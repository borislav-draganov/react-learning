import * as React from "react";
import {Note} from "../../models/index";

interface NoteProps {
    note: Note
}

export class NoteItem extends React.Component<NoteProps, {}> {
    render() {
        return (
            <div>
                <span>ID:</span> {this.props.note.id} <br />
                <span>Note:</span> {this.props.note.text}
            </div>
        )
    }
}