import {connect} from "react-redux";
import NoteList from "../components/notes/NoteList";
import {getData} from "../actions/index";
import * as React from "react";

const mapStateToProps = (state) => ({
    notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
    getData,
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteList);