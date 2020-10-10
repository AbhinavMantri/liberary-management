import { Action } from '@ngrx/store'; 

export enum UserActionTypes {
    LOGIN = "[User] Login",
    LOGIN_SUCCESS = "[User] Login Success",
    LOGIN_FAILURE = '[User] Login Failure',
    MESSAGE = '[User] Message',
    LOGOUT = '[User] Logout',
    LOGOUT_SUCCESS = '[User] Logout Success',
    AUTO_LOGIN = '[User] Auto Login',
    AUTO_LOGIN_SUCCESS = '[User] Auto Login Success',
    AUTO_LOGIN_FAILURE = '[User] Auto Login Failure',
};

export class Login implements Action {
    readonly type = UserActionTypes.LOGIN;

    constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
    readonly type = UserActionTypes.LOGIN_SUCCESS;

    constructor(public payload: any) {}
}

export class LoginFailure implements Action {
    readonly type = UserActionTypes.LOGIN_FAILURE;

    constructor(public payload: any) {}
}

export class Message implements Action {
    readonly type = UserActionTypes.MESSAGE;

    constructor(public payload: any) {}
}

export class Logout implements Action {
    readonly type = UserActionTypes.LOGOUT;

    constructor(public payload: any) {}
}

export class AutoLogin implements Action {
    readonly type = UserActionTypes.AUTO_LOGIN;

    constructor(public payload: any) {}
}

export class AutoLoginSucces implements Action {
    readonly type = UserActionTypes.AUTO_LOGIN_SUCCESS;

    constructor(public payload: any) {}
}

export class AutoLoginFailure implements Action {
    readonly type = UserActionTypes.AUTO_LOGIN_FAILURE;

    constructor(public payload: any) {}
}

export type All = 
    | Login
    | LoginSuccess
    | LoginFailure
    | Message
    | Logout
    | AutoLogin
    | AutoLoginSucces
    | AutoLoginFailure;