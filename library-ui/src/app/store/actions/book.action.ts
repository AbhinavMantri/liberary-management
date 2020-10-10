import { Action } from '@ngrx/store';

export enum BookActionTypes {
    BOOKS = "[Book] Books",
    BOOKS_SUCCESS = "[Book] Books Success",
    BOOK = "[Book] Book",
    BOOK_SUCCESS = "[Book] Book Success",
    ADD_REVIEW = "[Book] Add Review",
    ON_FAILURE = '[Book] On Failure',
    ADD_BOOK = "[Book] Add Book",
    UPDATE_BOOK = "[Book] Update Book",
    DELETE_BOOK = "[Book] Delete Book",
    ADD_BOOK_SUCCESS = "[Book] Add Book Success",
    UPDATE_BOOK_SUCCESS = "[Book] Update Book Success",
    DELETE_BOOK_SUCCESS = "[Book] Delete Book Success",
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

export class AddBook implements Action {
    readonly type = BookActionTypes.ADD_BOOK;

    constructor(public payload: any) {}
}

export class UpdateBook implements Action {
    readonly type = BookActionTypes.UPDATE_BOOK;

    constructor(public payload: any) {}
}

export class DeleteBook implements Action {
    readonly type = BookActionTypes.DELETE_BOOK;

    constructor(public payload: any) {}
}

export class DeleteBookSuccess implements Action {
    readonly type = BookActionTypes.DELETE_BOOK_SUCCESS;

    constructor(public payload: any) {}
}

export class AddBookSuccess implements Action {
    readonly type = BookActionTypes.ADD_BOOK_SUCCESS;

    constructor(public payload: any) {}
}

export class UpdateBookSuccess implements Action {
    readonly type = BookActionTypes.UPDATE_BOOK_SUCCESS;

    constructor(public payload: any) {}
}

export type All = 
    | Books
    | Book
    | BooksSuccess
    | BookSuccess
    | AddReview
    | OnFailure
    | AddBook
    | UpdateBook
    | DeleteBook
    | AddBookSuccess
    | UpdateBookSuccess
    | DeleteBookSuccess;