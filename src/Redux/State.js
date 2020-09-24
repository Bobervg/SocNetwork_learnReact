let rerenderEntiretree = () => {

}
let state = {
    postsPageData: {
        newpostPageData:'Введите сообщение',
        postPageData: [
            { id: 1, message: 'first post', likecount: 15 },
            { id: 2, message: 'second post', likecount: 6 }
        ]
    },
    dialogsPageData: {
        dialogsNamesData: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Viktor' },
            { id: 5, name: 'Anton' },
            { id: 6, name: 'Valera' }],
        messagesData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Hi' }],
        newMessageData:'Введите сообщение'
    },
    sidebarData: {
        bestFriendsData: [
            { id: 1, name: 'Andrew' },
            { id: 2, name: 'Sasha' },
            { id: 3, name: 'Sveta' }
        ]
    }
}

export let updateNewPost = (text) => {
    state.postsPageData.newpostPageData = text
    rerenderEntiretree(state);
}
export let updateNewMessage = (text) => {
    state.dialogsPageData.newMessageData = text
    rerenderEntiretree(state);
}

export let addMessage = () => {
    let idLengthArray = state.dialogsPageData.messagesData.length + 1
    let newMessage = {
        id: idLengthArray, message: state.dialogsPageData.newMessageData
    }
    state.dialogsPageData.messagesData.push(newMessage)
    state.dialogsPageData.newMessageData=''
    rerenderEntiretree(state);
}

export let addPost = () => {
    let lengthArray = state.postsPageData.postPageData.length + 1
    let newPost = {
        id: lengthArray, message: state.postsPageData.newpostPageData, likecount: 0
    }
    state.postsPageData.postPageData.push(newPost)
    state.postsPageData.newpostPageData=''
    rerenderEntiretree(state);
};

export const subscribe = (observer) => {
    rerenderEntiretree = observer;
}

export default state;