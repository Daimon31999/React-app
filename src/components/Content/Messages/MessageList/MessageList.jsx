import React from "react";
import m from './MessageList.module.css'
import MessageItem from "./MessageItem/MessageItem";

const MessageList = (props) => {
    let messages = props.content.map(
        element => <MessageItem message={element.message} id={element.id}/>
    )
    return (
        <div className={m.messages}>
            {messages}
        </div>
    )
}

export default MessageList