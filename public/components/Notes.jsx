import React from "react";
import request from "request-promise-native";

export default class Notes extends React.Component {
    constructor() {
        super();

        this.state = {
            notes: []
        };

        this.getNotes().then((notes) => {
            this.setState({ notes })
        });
    }

    getNotes() {
        return request('http://localhost:8080/api/notes').then((data) => JSON.parse(data))
    }

    render() {
        return (
            <div>
                { this.state.notes.map((note) =>
                    <div key={note.id}>
                        <span>ID:</span> {note.id} <br />
                        <span>Note:</span> {note.text}
                    </div>
                )}
            </div>
        )
    }
}