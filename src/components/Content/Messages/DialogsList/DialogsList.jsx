import React from "react";
import m from './DialogsList.module.css'
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = () => {
    let dialogsArr = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Ilia'},
        {id: 3, name: 'Maxik'},
        {id: 4, name: 'Danik'},
        {id: 5, name: 'Kiril'}
    ]
    let dialogs = dialogsArr.map(
        dialog => <DialogItem name={dialog.name} index={dialog.id}/>
    )
    return (
        <div className={m.dialogs_list}>
            {dialogs}
        </div>
    )
}

export default Dialogs