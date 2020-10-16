
import { API } from './../api/api';
let initialState = {
    usersData: [],
    pageSize: 50,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    isButtonDisabled: []

}


const usersPageDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                usersData: action.users
            }
        }
        case 'SET_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET_TOTALCOUNT': {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case 'TOGGLE_ISFETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'BUTTON-DISABLE': {
            return {
                ...state,
                isButtonDisabled: action.toogle === true ? [...state.isButtonDisabled, action.userId]
                    : state.isButtonDisabled.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const setUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        API.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}


export const unFollowTC = (userId) => {
    return (dispatch) => {
        dispatch(buttonDisable(true, userId))
        API.getUnFollow(userId)
            .then(response => {
                if (response.resultCode === 0) { dispatch(setUnFollow(userId)) }
                dispatch(buttonDisable(false, userId))
            })
    }
}

export const followTC = (userId) => {
    return (dispatch) => {
        dispatch(buttonDisable(true, userId))
        API.getFollow(userId)
            .then(response => {
                if (response.resultCode === 0) { dispatch(setFollow(userId)) }
                dispatch(buttonDisable(false, userId))
            })
    }
}

export const setFollow = (userId) => ({ type: 'FOLLOW', userId })

export const setUnFollow = (userId) => ({ type: 'UNFOLLOW', userId })

export const setUsers = (users) => ({ type: 'SET_USERS', users })

export const setCurrentPage = (currentPage) => ({ type: 'SET_PAGE', currentPage })

export const setTotalUsersCount = (totalCount) => ({ type: 'SET_TOTALCOUNT', totalCount })

export const toggleIsFetching = (isFetching) => ({ type: 'TOGGLE_ISFETCHING', isFetching })

export const buttonDisable = (toggle, userId) => ({ type: 'BUTTON-DISABLE', toggle, userId })

export default usersPageDataReducer;