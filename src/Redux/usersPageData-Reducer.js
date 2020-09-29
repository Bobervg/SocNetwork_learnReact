
let initialState = {
    usersData: [
        // { id: 1, followed: true, avatar:{} , name: 'Dmitry K.', status: 'Hey yo', location: {contry: 'Belarus', city: 'Grodno'} },
        // { id: 2, followed: false, avatar:{} , name: 'Svetlana D.', status: 'lovely', location: {contry: 'USA', city: 'Manhattan'} },
        // { id: 3, followed: false, avatar:{} , name: 'Sergey S.', status: 'subscribe pls', location: {contry: 'Bulgaria', city: 'Bulg'} },
        // { id: 4, followed: true, avatar:{} , name: 'Andrew T.', status: 'dunno', location: {contry: 'Russia', city: 'Moscow'} }
    ]
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
                usersData: [...state.usersData, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: 'FOLLOW', userId })

export const unFollowActionCreator = (userId) => ({ type: 'UNFOLLOW', userId })

export const setUsersActionCreator = (users) => ({ type: 'SET_USERS', users })

export default usersPageDataReducer;