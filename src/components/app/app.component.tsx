import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NoteListComponent } from '../note-list/note-list.component';
import { DormammuComponent } from '../dormammu/dormammu.component';

export const AppComponent: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<NoteListComponent />} />

            <Route path="/dormammu/:count" element={<DormammuComponent />} />
        </Routes>
    );
};
