
let initialState = {
    usersData: [],
    pageSize: 50,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false
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
        case 'TOGGLE_ISFETCHING': {
            return {
                ...state, 
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: 'FOLLOW', userId })

export const unFollow = (userId) => ({ type: 'UNFOLLOW', userId })

export const setUsers = (users) => ({ type: 'SET_USERS', users })

export const setCurrentPage = (currentPage) => ({ type: 'SET_PAGE', currentPage })

export const setTotalUsersCount = (totalCount) => ({ type: 'SET_TOTALCOUNT', totalCount })

export const toggleIsFetching = (isFetching) => ( { type: 'TOGGLE_ISFETCHING', isFetching } )

export default usersPageDataReducer;