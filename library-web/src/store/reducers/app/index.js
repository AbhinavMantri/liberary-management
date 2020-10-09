import { appActionType } from "../../actions/app";
import { bookActionType } from "../../actions/book";

export const initialState = {
    loading: false,
    message: null,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case appActionType.LOADING:
            return { ...state, loading: action.payload };
        case appActionType.SET_MESSAGE:
            return { ...state, message: action.payload, loading: false };
        case bookActionType.SET_BOOK:
        case bookActionType.SET_BOOKS:
            return { ...state, loading: false};
        default:
            return state;
    }    
}