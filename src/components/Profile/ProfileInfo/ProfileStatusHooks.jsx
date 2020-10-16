
import React, { useState } from 'react';


const ProfileStatusHooks = (props) => {

    let [editMode, editModeToggle] = useState(true)
    let [status, changeStatusText] = useState(props.status)

const editModeOn = () => {
    editModeToggle(false)
}
const editModeOff = () => {
    editModeToggle(true)
    props.updateStatus(status)
}
const onStatusChanged = (e) => {
    changeStatusText(e.currentTarget.value)
}

        return (
            <div> {editMode ?
                <div>
                    <span onDoubleClick={editModeOn}>{props.status || '--No Status--'}</span>
                </div>
                :
                <div>
                    <input onChange= {onStatusChanged} onBlur={editModeOff} autoFocus={true} value = {status} /> 
                </div>
            }</div>
        )
    }

export default ProfileStatusHooks