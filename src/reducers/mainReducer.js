export default function mainReducer(state, action) {

    if(action.type === 'SHOW_LOGIN_FORM' ) {
        return Object.assign({}, state, {loginForm: true});
    }

    if(action.type === 'CLOSED_LOGIN_FORM' ) {
        return Object.assign({}, state, {loginForm: false});
    }
    return state;
}
