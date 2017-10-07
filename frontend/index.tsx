import * as React from 'react';
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Provider from "react-redux/es/components/Provider";
import {Dormammu} from "./components/Dormammu";
import {applyMiddleware, createStore} from "redux";
import NoteListContainer from "./containers/NotesListContainer";
import thunk from "redux-thunk";
import {reducers} from "./reducers/index";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={NoteListContainer}/>

                <Route exact path="/dormammu" component={Dormammu}/>
                <Route path="/dormammu/:count" component={Dormammu}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));