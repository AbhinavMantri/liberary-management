import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserActionTypes, Login, LoginSuccess, AutoLogin, AutoLoginSucces, AutoLoginFailure } from '../actions/user.action';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { OnFailure } from '../actions/book.action';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserEffect {
    constructor(
        private actions: Actions,
        private userService: UserService,
        private router: Router,
    ) {}


    @Effect()
    AutoLogin: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.AUTO_LOGIN),
        map((action: AutoLogin) => action.payload),
        switchMap(payload => {  
          const user: User = this.userService.getUserCookie();
          if(user && user.accessToken)
            return Promise.resolve(new AutoLoginSucces({ user: user }));
          else
            return Promise.resolve(new AutoLoginFailure({ }));        
        })  
    );

    @Effect()
    Login: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.LOGIN),
        map((action: Login) => action.payload),
        switchMap(payload => {
            return this.userService.login(payload.email, payload.password).pipe(
                map(data => {
                    const { user } = data || {};
                    return new LoginSuccess({ user: { ...user, email: payload.email } });
                }),
                catchError(err => {
                    return of(new OnFailure({error: err.error.reason }));
                })
            );
        })  
    );

    @Effect({ dispatch: false })
    LoginSuccess: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.LOGIN_SUCCESS),
        tap(data => {
            const { user } = data.payload || {};
            this.userService.setUserCookie(user);
            this.router.navigateByUrl("/books");
        })
    );
    
    @Effect({ dispatch: false }) 
    LoginFailure: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.LOGIN_FAILURE)
    );
    
    @Effect({ dispatch: false })
    Message: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.MESSAGE)
    );

    @Effect({ dispatch: false })
    Logout: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.LOGOUT),
        tap(payload => {
            this.userService.removeAllCookies();
            this.router.navigateByUrl("/login");
        })
    )

    @Effect({ dispatch: false })
    AutoLoginFailure: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.AUTO_LOGIN_FAILURE),
        tap(payload => {
            this.router.navigateByUrl("/login");
        })
    )
}