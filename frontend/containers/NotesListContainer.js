import {connect} from "react-redux";
import NoteList from "../components/notes/NoteList";
import {getNotes} from "../actions/index";
import * as React from "react";

class NotesListContainer extends React.Component {
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
)(NotesListContainer);