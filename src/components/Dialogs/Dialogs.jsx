import React from 'react';
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../Redux/State'


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPageData.dialogsNamesData.map((dialog) => {
        return <DialogName name={dialog.name} id={dialog.id} />
    });


    let messagesElements = props.dialogsPageData.messagesData.map((msg) => {
        return <Message message={msg.message} id={msg.id} />
    })


    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    };

    const updateNewMessage = (event) => {
        let text = event.target.value
        props.dispatch(updateNewMessageActionCreator(text))
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
                    <textarea onChange={updateNewMessage}  value={props.dialogsPageData.newMessageData} placeholder='Введите сообщение'></textarea>
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