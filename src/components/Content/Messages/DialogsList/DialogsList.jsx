import React from "react";
import m from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = () => {
    return (
        <div className={m.dialog}>
            <NavLink to='/messages/2'>Илюха</NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={m.dialogs}>
            <Dialog/>
        </div>
    )
}

export default Dialogs