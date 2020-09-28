
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
            state.postPageData.push(newPost)
            state.newpostPageData = ''
            return state
        }
        case 'UPDATE-NEW-POST': {
            state.newpostPageData = action.newText
            return state
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