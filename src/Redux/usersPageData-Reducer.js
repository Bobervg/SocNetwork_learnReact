
let initialState = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: 20,
    currentPage: 1
}


const usersPageDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            return{
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed:true}
                    }
                    return u;
                })
            }
        }
        case 'UNFOLLOW' : {
            return{
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false}
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
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: 'FOLLOW', userId })

export const unFollowActionCreator = (userId) => ({ type: 'UNFOLLOW', userId })

export const setUsersActionCreator = (users) => ({ type: 'SET_USERS', users })

export const setCurrentPageActionCreator = (currentPage) => ({ type: 'SET_PAGE', currentPage })

export const setTotalUsersCountActionCreator = (totalCount) => ({ type: 'SET_TOTALCOUNT', totalCount })

export default usersPageDataReducer;