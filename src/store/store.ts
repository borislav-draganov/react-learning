import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './root-reducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: rootReducer,
    // By default RTK has a bunch of middlewares - one of which is persist
    // Which throws errors in the console in you store non-primitives in state, like the Date's in the User object
    // So made it use only thunk
    middleware: [thunk],
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
