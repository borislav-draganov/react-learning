import * as React from "react";
import {connect} from "react-redux";
import {getAllNotes} from "../actions/index";
import {Note} from "../models/index";
import {NoteList} from "../components/notes/NoteList";

interface NotesListContainerProps {
    getNotes: () => void;
    notes: Array<Note>;
}

class NoteListContainer extends React.Component<NotesListContainerProps> {
    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <NoteList notes={this.props.notes}/>
        )
    }
}

const mapStateToProps = (state) => ({
    notes: state.notes.items,
});

const mapDispatchToProps = (dispatch) => ({
    getNotes: () => dispatch(getAllNotes()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NoteListContainer);