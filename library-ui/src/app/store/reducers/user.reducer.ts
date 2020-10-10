import { User } from 'src/app/models/user.model';
import { UserActionTypes, All } from '../actions/user.action';

export interface State {
    isAuthenticated: boolean;

    user: User | null;

    errorMessage: string | null;

    successMessage: string | null;
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
    successMessage: null,
}

export function reducer(state = initialState, action: All): State {
    const { user, error, message } = action.payload || {};
    switch(action.type) {
        case UserActionTypes.LOGIN_SUCCESS:
        case UserActionTypes.AUTO_LOGIN_SUCCESS:    
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    ...(state.user || {}),
                    ...user,
                },
                errorMessage: null,
                successMessage: message,
            };
        case UserActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                errorMessage: error,
            };
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                ...initialState,
                successMessage: "User have been logged out successfully",
            };                 
        default:
            return state;    
    }
}