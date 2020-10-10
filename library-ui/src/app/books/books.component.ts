import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Books } from '../store/actions/book.action';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[] | null;
  getState: Observable<any>;

  constructor(private store: Store<AppState>) { 
    this.getState = store.select("bookState");
  }

  ngOnInit(): void {
    this.getState.subscribe(state => {
      this.books = state.list;
    });

    this.requestBooks();
  }

  requestBooks(): void {
    this.store.dispatch(new Books({ }));
  }
}
