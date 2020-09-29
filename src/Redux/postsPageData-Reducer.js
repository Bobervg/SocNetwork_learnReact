
let initialState = {
    newpostPageData: '',
    postPageData: [
        { id: 1, message: 'first post', likecount: 15 },
        { id: 2, message: 'second post', likecount: 6 }
    ]
}


const postsPageDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let lengthArray = state.postPageData.length + 1
            let newPost = {
                id: lengthArray,
                message: state.newpostPageData,
                likecount: 0
            }
            return {
                ...state,
                postPageData: [...state.postPageData, newPost],
                newpostPageData: ''
            }
        }
        case 'UPDATE-NEW-POST': {
            return {
                ...state,
                newpostPageData: action.newText
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

export default postsPageDataReducer;