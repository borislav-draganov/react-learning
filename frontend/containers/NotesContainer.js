import {connect} from "react-redux";
import NoteList from "../components/notes/NoteList";
import {getNotes} from "../actions/index";
import * as React from "react";

const mapStateToProps = (state) => ({
    notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
    getNotes: () => dispatch(getNotes())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteList);