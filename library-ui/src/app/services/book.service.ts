import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../models/book.model';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  preUrl: string = `${environment.apiUrl}/books`;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<Book[]>(this.preUrl);
  }

  getBook(id: number): Observable<any> {
    return this.http.get<Book>(`${this.preUrl}/${id}`);
  }

  addReview(review: Review, id: number): Observable<any> {
    return this.http.post<any>(`${this.preUrl}/${id}/reviews`, review);
  }

  addBook(book: Book): Observable<any> {
    return this.http.post<any>(this.preUrl, book);
  }

  updateBook(book: Book, id: number): Observable<any> {
    return this.http.put<any>(`${this.preUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(`${this.preUrl}/${id}`);
  }
}
