import { Action } from '@ngrx/store';

export enum AppActionTypes {
    MESSAGE = "[App] Message",
    TOGGLE_LOADER = "[App] Toggle Loader",
}


export class Message implements Action {
    readonly type = AppActionTypes.MESSAGE;

    constructor(public payload: any) {}
}

export class ToggleLoader implements Action {
    readonly type = AppActionTypes.TOGGLE_LOADER;

    constructor(public payload: any) {}
}

export type All =
    | Message
    | ToggleLoader;