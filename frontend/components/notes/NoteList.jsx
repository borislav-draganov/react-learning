import React from "react";
import Note from "./Note";

export default class Notes extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(this.props.getData());
    }

    render() {
        return (
            <div>
                { this.props.notes.map((note, i) =>
                    <Note data={note} key={i}/>
                )}
            </div>
        )
    }
}