import * as user from './reducers/user.reducer';
import * as book from './reducers/book.reducer';
import { createFeatureSelector } from '@ngrx/store';


export interface AppState {
    userState: user.State,
    bookState: book.State,
}

export const reducers = {
    userState: user.reducer,
    bookState: book.reducer,
}


export const userState = createFeatureSelector<AppState>('userState');
export const bookState = createFeatureSelector<AppState>('bookState');