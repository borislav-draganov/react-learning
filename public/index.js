import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/:count" component={App}/>
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));