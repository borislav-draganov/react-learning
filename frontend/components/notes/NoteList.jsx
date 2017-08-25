import React from "react";
import request from "request-promise-native";
import Note from "./Note";

export default class Notes extends React.Component {
    constructor(props) {
        super(props);

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
                { this.state.notes.map((note, i) =>
                    <Note data={note} key={i}/>
                )}
            </div>
        )
    }
}