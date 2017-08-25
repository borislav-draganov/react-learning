import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NoteList from "./components/notes/NoteList";
import Dormammu from "./components/Dormammu";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={NoteList}/>

            <Route exact path="/dormammu" component={Dormammu}/>
            <Route path="/dormammu/:count" component={Dormammu}/>
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));