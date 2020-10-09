const { UserEffects } = require("../../effects");


export const userActionType = {
    LOGIN: 'LOGIN',
    SET_ERROR: 'SET_ERROR',
    SET_LOGIN: 'SET_LOGIN',
};

export default (action, args) => dispatch => {
    switch(action) {
        case userActionType.LOGIN:
            return UserEffects.login(args, dispatch);
        case userActionType.SET_ERROR:
        case userActionType.SET_LOGIN:
            return dispatch({ type: action, payload: args });       
        default:
            return null;    
    }
}