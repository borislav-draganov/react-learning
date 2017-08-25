import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dormammu from "./components/Dormammu";
import Provider from "react-redux/es/components/Provider";
import {applyMiddleware, createStore} from "redux";
import reducer from './reducers'
import NotesContainer from "./containers/NotesContainer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={NotesContainer}/>

                <Route exact path="/dormammu" component={Dormammu}/>
                <Route path="/dormammu/:count" component={Dormammu}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));