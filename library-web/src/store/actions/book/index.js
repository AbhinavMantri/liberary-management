import { BookEffects } from "../../effects";

export const bookActionType = {
    GET_BOOKS: 'GET_BOOKS',
    SET_BOOKS: 'SET_BOOKS',
    GET_BOOK: 'GET_BOOK',
    SET_BOOK: 'SET_BOOK',
    ADD_REVIEW: 'ADD_REVIEW',
    ADDED_REVIEW: 'ADDED_REVIEW',
};

export default (action, args) => dispatch => {
    switch(action) {
        case bookActionType.GET_BOOKS:
            return BookEffects.getBooks(args, dispatch);
        case bookActionType.GET_BOOK:
            return BookEffects.getBook(args, dispatch); 
        case bookActionType.ADD_REVIEW:
            return BookEffects.addReview(args, dispatch);
        case bookActionType.ADDED_REVIEW:
        case bookActionType.SET_BOOK:
        case bookActionType.SET_BOOKS:         
            return dispatch({ type: action, payload: args });           
        default:
            return null;
    }
}