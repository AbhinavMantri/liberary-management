import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  preUrl: string = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient, private cookie: CookieService) { }

  getUserCookie(): User {
    return JSON.parse(this.cookie.get("user") || "{}");
  }

  setUserCookie(user: User): void {
    this.cookie.set("user", JSON.stringify(user));
  }

  removeAllCookies(): void {
    this.cookie.deleteAll();
  }
  
  login(email: string, password: string): Observable<any> {
    const url = `${this.preUrl}/auth`;
    return this.http.post<User>(url, { email, password });
  }
}
