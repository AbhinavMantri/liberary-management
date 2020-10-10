import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';
import { Book as GetBook, AddBook, UpdateBook } from '../store/actions/book.action';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  @Input() action: string;
  @Input() id: number | null;
  book: Book = new Book();
  bookState: Observable<any>;
  
  @Output() displayForm = new EventEmitter();
  @Output() hideError = new EventEmitter();

  constructor(private store: Store<AppState>) {
    this.bookState = this.store.select("bookState");
  }

  ngOnInit(): void {
    this.bookState.subscribe(state => {
      if(this.id) 
        this.setBook(state.detail[this.id]);
    });

    if(this.id) {
      this.store.dispatch(new GetBook({ id: this.id }));
    }
  }

  setBook(book: Book | null): void {
    this.book = book ? JSON.parse(JSON.stringify(book)) : new Book(); 
  }

  saveBook(): void {
    if(this.action === "Add") {
      this.store.dispatch(new AddBook({ book: this.book }));
    }
    else if(this.action === "Update") {
      this.store.dispatch(new UpdateBook({ book: this.book, id: this.id }));
    } 

    this.hideForm();
  }

  hideForm(): void {
    this.displayForm.emit();
    this.hideError.emit();
  }
}
