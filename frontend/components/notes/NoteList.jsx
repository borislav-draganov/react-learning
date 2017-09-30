import React from "react";
import Note from "./Note";

export default class Notes extends React.Component {
    render() {
        return (
            this.props.notes.map((note, i) =>
                <Note data={note} key={i}/>
            )
        )
    }
}