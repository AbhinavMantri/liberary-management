import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Injectable()
export class TokenIntercept implements HttpInterceptor {

    constructor(private userService: UserService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user: User = this.userService.getUserCookie();

        if(user && user.accessToken) {
            const modifiedReq = req.clone({ 
                headers: req.headers.set('access-token', user.accessToken),
            });

            return next.handle(modifiedReq);
        }
            
        return next.handle(req);
    }
}