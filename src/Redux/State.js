let state = {
    postsPageData: [
        { id: 1, message: 'first post', likecount: 15 },
        { id: 2, message: 'second post', likecount: 6 }],     
    dialogsPageData: {
        dialogsNamesData: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Viktor' },
        { id: 5, name: 'Anton' },
        { id: 6, name: 'Valera' }],
    messagesData:[
          { id: 1, message: 'Hi' },
          { id: 2, message: 'How are you' },
          { id: 3, message: 'Yo' },
          { id: 4, message: 'Yo' },
          { id: 5, message: 'Hi' }]},
    sidebarData:{
        bestFriendsData:[
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Sveta'}
        ]
    }
}
export default state;