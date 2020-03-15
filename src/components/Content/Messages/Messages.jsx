import React from "react";
import m from './Messages.module.css'
import {NavLink} from "react-router-dom";
import Dialogs from "./DialogsList/DialogsList";
import MessageList from "./MessageList/MessageList";
const Messages = () => {
    return (
        <div className={m.messages}>
            <Dialogs/>
            <MessageList/>
        </div>
    )
}

export default Messages