import React from 'react';
import styles from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_names}>
                <div className={styles.dialogs_name + " " + styles.active}>
                    Dima
                </div>
                <div className={styles.dialogs_name}>
                    Sveta
                </div >
                <div className={styles.dialogs_name}>
                    Andrey
                </div >
                <div className={styles.dialogs_name}>
                    Sasha
                </div >
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Howareyou</div>
                <div className={styles.message}>Yo</div>
                <div className={styles.message}>Hi</div>

            </div>
        </div>
    )
}
export default Dialogs;