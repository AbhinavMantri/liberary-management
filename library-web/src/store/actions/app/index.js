export const appActionType = {
    LOADING: 'LOADING',
    SET_MESSAGE: 'SET_MESSAGE',
};

export default (action, args) => dispatch => {
    switch(action) {
        case appActionType.LOADING:
        case appActionType.SET_MESSAGE:
            return dispatch({ type: action, payload: args });    
        default:
            return null;
    }
}