import React from "react";
import m from './DialogsList.module.css'
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let dialogs = props.content.map(
        dialog => <DialogItem name={dialog.name} index={dialog.id}/>
    )

    return (
        <div className={m.dialogs_list}>
            {dialogs}
        </div>
    )
}

export default Dialogs