import { Actions, ofType, Effect } from '@ngrx/effects';
import { BookService } from 'src/app/services/book.service';
// import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookActionTypes, Books, BooksSuccess, OnFailure, BookSuccess, Book, AddReview } from '../actions/book.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Message } from '../actions/app.action';
import constants from 'src/app/constants';

@Injectable()
export class BookEffect {
    constructor(
        private actions: Actions,
        private bookService: BookService,
        // private router: Router,
    ) {}

    @Effect()
    Books: Observable<any> = this.actions.pipe(
        ofType(BookActionTypes.BOOKS),
        map((action: Books) => action.payload),
        switchMap(payload => {
            return this.bookService.getBooks().pipe(
                map(books => {
                    // console.log(user);
                    return new BooksSuccess(books);
                }),
                catchError(err => {
                    return of(new OnFailure({error: err.error.reason }));
                })
            );
        })  
    );

    @Effect()
    Book: Observable<any> = this.actions.pipe(
        ofType(BookActionTypes.BOOK),
        map((action: Book) => action.payload),
        switchMap(payload => {
            return this.bookService.getBook(payload.id).pipe(
                map(book => {
                    const { data } = book || {};
                    if(data)
                        return new BookSuccess({ data, id: payload.id });
                }),
                catchError(err => {
                    return of(new OnFailure({error: err.error.reason }));
                })
            );
        })  
    );

    @Effect()
    AddReview: Observable<any> = this.actions.pipe(
        ofType(BookActionTypes.ADD_REVIEW),
        map((action: AddReview) => action.payload),
        switchMap(payload => {
            const { review, id } = payload || {};
            return this.bookService.addReview(review, id).pipe(
                map(data => {
                    // console.log(user);
                    return new Message({ type: constants.MESSAGE_TYPE.SUCCESS, content: "Thanks for reviewing!!!" });
                }),
                catchError(err => {
                    return of(new OnFailure({type: constants.MESSAGE_TYPE.ERROR, content: "Something went wrong. Try Again" }));
                })
            );
        })  
    );
}