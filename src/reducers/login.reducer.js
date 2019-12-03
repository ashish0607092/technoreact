export const loginReducer = (state = { isLoggedIn: false }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state;
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return {
                ...state,
                isLoggedIn: false
            }
    }
}