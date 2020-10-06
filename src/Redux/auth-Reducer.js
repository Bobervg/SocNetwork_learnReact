
let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    messages: null,
    fieldsErrors: null,
    resultCode: null,
    isLogged: false
}


const authDataReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_AUTH_DATA': {
            return {
                ...state,
                ...action.authData,
                isLogged:true
            }
        }
        default:
            return state;
    }
}


export const setAuthData = (authData) => ({ type: 'SET_AUTH_DATA', authData })

export default authDataReducer;