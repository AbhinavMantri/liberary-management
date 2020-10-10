import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Logout, Login } from '../store/actions/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string;

  constructor(private store: Store<AppState>) { 
    this.getState = this.store.select("userState");
  }

  ngOnInit(): void {
    this.getState.subscribe(state => {
      this.errorMessage = state.errorMessage;
    });
    this.store.dispatch(new Logout({ }));
  }

  onSubmit(): void {
    this.store.dispatch(new Login({email: this.user.email, password: this.user.password}));
  }
}
