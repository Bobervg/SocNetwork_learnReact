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


export default DialogsContainter;