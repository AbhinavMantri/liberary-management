import { BookActionTypes,  All } from '../actions/book.action';
import { Book } from 'src/app/models/book.model';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

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

const getUpdateList = (state: Book[], data: Book) => {
    const arr = JSON.parse(JSON.stringify(state));
    const index = arr.findIndex(d => d.id === data.id);
    arr[index] =  data;
    return arr;
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
        case BookActionTypes.ADD_BOOK_SUCCESS:
            return {
                ...state,
                list: (state.list || []).concat(data),
                detail: {
                    ...state.detail,
                    [data.id]: data,
                }
            };
        case BookActionTypes.UPDATE_BOOK_SUCCESS:
            return {
                ...state,
                list: getUpdateList(state.list, data),
                detail: {
                    ...state.detail,
                    [id]: {...state.detail[id], ...data},
                }
            };  
        case BookActionTypes.DELETE_BOOK_SUCCESS:
            return {
                ...state,
                list: state.list.filter(d => d.id !== id),
                detail: {
                    ...state.detail,
                    [id]: null,
                }
            };                            
        default:
            return state;    
    }
}