import { Action } from '@ngrx/store';

export enum BookActionTypes {
    BOOKS = "[Book] Books",
    BOOKS_SUCCESS = "[Book] Books Success",
    BOOK = "[Book] Book",
    BOOK_SUCCESS = "[Book] Book Success",
    ADD_REVIEW = "[Book] Add Review",
    ON_FAILURE = '[Book] On Failure',
};

export class Books implements Action {
    readonly type = BookActionTypes.BOOKS;

    constructor(public payload: any) {}
}

export class Book implements Action {
    readonly type = BookActionTypes.BOOK;

    constructor(public payload: any) {}
}

export class BooksSuccess implements Action {
    readonly type = BookActionTypes.BOOKS_SUCCESS;

    constructor(public payload: any) {}
}

export class BookSuccess implements Action {
    readonly type = BookActionTypes.BOOK_SUCCESS;

    constructor(public payload: any) {}
}

export class AddReview implements Action {
    readonly type = BookActionTypes.ADD_REVIEW;

    constructor(public payload: any) {}
}


export class OnFailure implements Action {
    readonly type = BookActionTypes.ON_FAILURE;

    constructor(public payload: any) {}
}

export type All = 
    | Books
    | Book
    | BooksSuccess
    | BookSuccess
    | AddReview
    | OnFailure;