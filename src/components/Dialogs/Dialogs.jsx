import React from 'react';
import styles from './Dialogs.module.css'
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';


const Dialogs = (props) => {

    if (props.isAuth == false) return <Redirect to={'/login'}/>

    let dialogsElements = props.dialogsPageData.dialogsNamesData.map((dialog) => {
        return <DialogName name={dialog.name} id={dialog.id} key={dialog.id} />
    });

    let messagesElements = props.dialogsPageData.messagesData.map((msg) => {
        return <Message message={msg.message} id={msg.id} key={msg.id}/>
    })


    const addMessage = () => {
        props.addMessage()
    };

    const updateNewMessage = (event) => {
        let text = event.target.value
        props.updateNewMessage(text)
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
                    <textarea onChange={updateNewMessage}  value={props.newMessageData} placeholder='Введите сообщение'></textarea>
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