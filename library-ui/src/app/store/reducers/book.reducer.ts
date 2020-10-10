import { BookActionTypes,  All } from '../actions/book.action';
import { Book } from 'src/app/models/book.model';

export interface State {
    list: Book[] | null;

    detail: Object | null;

    errorMessage: string | null;
}

export const initialState: State = {
    list: null,
    detail: {},
    errorMessage: null,
}

export function reducer(state = initialState, action: All): State {
    const { data, error, id } = action.payload || {};
    switch(action.type) {
        case BookActionTypes.BOOKS_SUCCESS:
            return {
                ...state,
                list: data, 
            };
        case BookActionTypes.BOOK_SUCCESS:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    [id]: data,
                },
            };
        case BookActionTypes.ON_FAILURE:
            return {
                ...state,
                errorMessage: error,
            };                     
        default:
            return state;    
    }
}