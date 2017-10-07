import {connect} from "react-redux";
import NoteList from "../components/notes/NoteList";
import {getNotes} from "../actions/index";
import * as React from "react";
import {Note} from "../models/index";

interface NotesListContainerProps {
    getNotes: () => any,
    notes: Note[]
}

class NoteListContainer extends React.Component<NotesListContainerProps, {}> {
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
    notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
    getNotes: () => dispatch(getNotes())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteListContainer);