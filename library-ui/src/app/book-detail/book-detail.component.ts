import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Book as GetBook } from '../store/actions/book.action';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book | null;
  getState: Observable<any>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private location: Location) { 
    this.getState = store.select("bookState");
  }

  ngOnInit(): void {
    const id: number = this.getId();
    this.getState.subscribe(state => {
      this.book = state.detail[id];
    });

    this.requestBook(id);
  }

  
  getId(): number {
    return  +this.route.snapshot.paramMap.get("id");
  } 


  requestBook(id = this.getId()): void {
    this.store.dispatch( new GetBook({ id }));
  }

  goBack(): void {
    this.location.back();
  }
}
