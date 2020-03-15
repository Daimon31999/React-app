import React from "react";
import m from './MessageList.module.css'
import MessageItem from "./MessageItem/MessageItem";

const MessageList = () => {
    let messagesArr = [
        {id: 1, message:'Hello World'},
        {id: 2, message:'How are you?'},
        {id: 3, message:'What is your name?'}
    ]
    return (
        <div className={m.messages}>
            <MessageItem message={messagesArr[0].message} id={messagesArr[0].id}/>
            <MessageItem message={messagesArr[1].message} id={messagesArr[1].id}/>
            <MessageItem message={messagesArr[2].message} id={messagesArr[2].id}/>
        </div>
    )
}

export default MessageList