import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Books, DeleteBook } from '../store/actions/book.action';
import { User } from '../models/user.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[] | null;
  user: User | null;
  getState: Observable<any>;
  userState: Observable<any>;
  showForm: boolean = false;
  errorMessage: string;
  action: string | null;
  bookId: number | null = null;

  constructor(private store: Store<AppState>) { 
    this.getState = store.select("bookState");
    this.userState = store.select("userState");
  }

  ngOnInit(): void {
    this.getState.subscribe(state => {
      this.books = state.list;
    });

    this.userState.subscribe(state => {
      this.user = state.user;
    });

    this.requestBooks();
  }

  requestBooks(): void {
    this.store.dispatch(new Books({ }));
  }

  isAdmin(): boolean {
    return this.user.role === 'ADMIN';
  }

  addBtnClick(): void {
    this.displayForm(true, "Add");
    this.bookId = null;
  }

  updateBtnClick(book): void {
    this.displayForm(true, "Update");
    this.bookId = book.id;
  }

  deleteBook(id): void {
    this.store.dispatch(new DeleteBook({ id }));
  }

  displayForm(showForm: boolean, action: string | null = null): void {
    this.showForm = showForm;
    this.action = action;
  }

  setErrorMessage(error: string): void {
    this.errorMessage = error;
  } 
}
