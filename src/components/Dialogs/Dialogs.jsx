import React from 'react';
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPageData.dialogsNamesData.map((dialog) => {
        return <DialogName name={dialog.name} id={dialog.id} />});

    
        let messagesElements = props.dialogsPageData.messagesData.map((msg) => {
        return <Message message={msg.message} id={msg.id} />})

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsNames}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
        </div>
        </div>
    )
}
export default Dialogs;