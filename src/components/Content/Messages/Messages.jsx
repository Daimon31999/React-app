import React from "react";
import m from './Messages.module.css'
import {NavLink} from "react-router-dom";
import Dialogs from "./DialogsList/DialogsList";
import MessageList from "./MessageList/MessageList";
import DialogItem from "./DialogsList/DialogItem/DialogItem";
import MessageItem from "./MessageList/MessageItem/MessageItem";
const Messages = (props) => {
    return (
        <div className={m.messages}>
            <Dialogs content={props.dialogs}/>
            <MessageList content={props.messages}/>
        </div>
    )
}

export default Messages