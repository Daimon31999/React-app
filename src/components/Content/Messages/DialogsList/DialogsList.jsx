import React from "react";
import m from './DialogsList.module.css'
import Dialog from "./DialogItem/DialogItem";


const Dialogs = () => {
    let dialogsArr = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Ilia'},
        {id: 3, name: 'Maxik'},
        {id: 4, name: 'Danik'},
        {id: 5, name: 'Kiril'}
    ]
    return (
        <div className={m.dialogs_list}>
            <Dialog name={dialogsArr[0].name} index={dialogsArr[0].id}/>
            <Dialog name={dialogsArr[1].name} index={dialogsArr[1].id}/>
            <Dialog name={dialogsArr[2].name} index={dialogsArr[2].id}/>
            <Dialog name={dialogsArr[3].name} index={dialogsArr[3].id}/>
            <Dialog name={dialogsArr[4].name} index={dialogsArr[4].id}/>
        </div>
    )
}

export default Dialogs