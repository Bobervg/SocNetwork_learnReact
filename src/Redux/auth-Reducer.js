
import { API } from './../api/api';

let initialState = {
    id: null,
    email: null,
    login: null,
    isLogged: false
}


const authDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_DATA': {
            return { 
                ...state,
                ...action.authData
            }
        }
        default:
            return state;
    }
}

export const setAuthData = (id, email, login, isLogged) => ({ type: 'SET_AUTH_DATA', authData: {id, email, login, isLogged }})

export const getAuthDataTC = () => {
    return (dispatch) => {
        API.authMe().then(response => {
            if (response.data.resultCode===0) {
                let {id, email, login} = response.data.data
        dispatch(setAuthData(id, email, login, true))}
    })
    }
}
export const loginTC = (email, password, rememberMe) => {
    return (dispatch) => {
        API.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode===0) {
                
        dispatch(getAuthDataTC())}
    })
    }
}
export const logoutTC = () => {
    return (dispatch) => {
        API.logout().then(response => {
            if (response.data.resultCode===0) {
        dispatch(setAuthData(null, null, null, false))}
    })
    }
}




export default authDataReducer;