import React from 'react';
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPageData.dialogsNamesData.map((dialog) => {
        return <DialogName name={dialog.name} id={dialog.id} />
    });


    let messagesElements = props.dialogsPageData.messagesData.map((msg) => {
        return <Message message={msg.message} id={msg.id} />
    })

    let newMessage = React.createRef()

    const addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
    };

    const updateNewMessage = () => {
        let text = newMessage.current.value
        props.dispatch({type: "UPDATE-NEW-MESSAGE", newText: text })
    }

    let clearTextArea = () => {
        newMessage.current.value=''
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsNames}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <div className={styles.text_button}>
                <div className={styles.textarea}>
                    <textarea ref={newMessage} onChange={updateNewMessage} onClick={clearTextArea} value={props.dialogsPageData.newMessageData}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Dialogs;