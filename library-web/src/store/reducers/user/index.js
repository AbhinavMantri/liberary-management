import { userActionType } from "../../actions/user";
import cookie from "../../../utils/cookie";

const token = cookie.getCookieItem("access-token");
const email = cookie.getCookieItem("email");

const initialState = {
    isLoggedIn: token ? true : false,
    token, email,
};

export default function(state = initialState, action) {
    const { data, email } = action.payload || {};
    
    switch(action.type) {
        case userActionType.SET_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                ...data,
                email,
            };
        default:
            return state;
    }    
}