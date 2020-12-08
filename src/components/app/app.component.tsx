import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NoteListComponent } from '../note-list/note-list.component';
import { DormammuComponent } from '../dormammu/dormammu.component';

export const AppComponent: FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <NoteListComponent />
            </Route>

            <Route path="/dormammu/:count">
                <DormammuComponent />
            </Route>
        </Switch>
    );
};
