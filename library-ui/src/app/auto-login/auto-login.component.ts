import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Router } from '@angular/router';
import { AutoLogin, Logout } from '../store/actions/user.action';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-auto-login',
  templateUrl: './auto-login.component.html',
  styleUrls: ['./auto-login.component.scss']
})
export class AutoLoginComponent implements OnInit {
  isAuthenticated: boolean | null; 
  getState: Observable<any>;  

  constructor(private store: Store<AppState>) { 
    this.getState = store.select("userState");
  }

  ngOnInit(): void {
    this.getState.subscribe(state => {
      this.isAuthenticated = state.isAuthenticated; 
    });

    if(window.location.pathname !== '/login') {
      this.store.dispatch(new AutoLogin({}));
    }
  }

  logout(): void {
    this.store.dispatch(new Logout({}));
  }
}
