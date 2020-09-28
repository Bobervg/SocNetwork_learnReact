import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../Redux/dialogsPageData-Reducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        newMessageData: state.dialogsPageData.newMessageData,
        dialogsPageData: state.dialogsPageData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => dispatch(updateNewMessageActionCreator(text)),
        addMessage: () => dispatch(addMessageActionCreator())
}
}


const DialogsContainter = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



// const DialogsContainter = (props) => {

//     const dialogsPageData = props.store.getState().dialogsPageData

//     const addMessage = () => {
//         props.store.dispatch(addMessageActionCreator())
//     };

//     const updateNewMessage = (text) => {
//         props.store.dispatch(updateNewMessageActionCreator(text))
//     }

//     const newMessageData = props.store.getState().dialogsPageData.newMessageData


//     return (
//         <Dialogs updateNewMessage={updateNewMessage} addMessage={addMessage} newMessageData={newMessageData} dialogsPageData={dialogsPageData} />
//     )
// }
export default DialogsContainter;