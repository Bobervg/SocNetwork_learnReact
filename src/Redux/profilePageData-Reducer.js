
let initialState = {
    newpostProfilePageData: '',
    profilePageData: [
        { id: 1, message: 'first post', likecount: 15 },
        { id: 2, message: 'second post', likecount: 6 }],
    userProfile: null

}


const profilePageDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let lengthArray = state.profilePageData.length + 1
            let newPost = {
                id: lengthArray,
                message: state.newpostProfilePageData,
                likecount: 0
            }
            return {
                ...state,
                profilePageData: [...state.profilePageData, newPost],
                newpostProfilePageData: ''
            }
        }
        case 'UPDATE-NEW-POST': {
            return {
                ...state,
                newpostProfilePageData: action.newText
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                userProfile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: 'ADD-POST' }
}
export const onChangeNewPostActionCreator = (text) => {
    return { type: 'UPDATE-NEW-POST', newText: text }
}
export const setUserProfile = (profile) => ( {type: 'SET-USER-PROFILE', profile })

export default profilePageDataReducer;