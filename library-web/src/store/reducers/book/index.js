import { bookActionType } from "../../actions/book";

const initialState = {
    detail: {},
    books: null,
};

export default function(state = initialState, action) {
    const { data } = action.payload || {};
    switch(action.type) {
        case bookActionType.SET_BOOKS:
            return {
                ...state,
                books: data, 
            };
        case bookActionType.SET_BOOK:
            return {
                ...state,
                book: data, 
            };    
        default:
            return state;
    }    
}