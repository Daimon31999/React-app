import React from "react";
import m from './MessageList.module.css'
import MessageItem from "./MessageItem/MessageItem";

const MessageList = () => {
    let messagesArr = [
        {id: 1, message: 'Hello World'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your name?'}
    ]

    let messages = messagesArr.map(
        element => <MessageItem message={element.message} id={element.id}/>
    )
    return (
        <div className={m.messages}>
            {messages}
        </div>
    )
}

export default MessageList