import React from "react";
import m from './MessageList.module.css'

const MessageList = () => {
    return (
        <div className={m.messages}>
            {/*<div className={m.message}>*/}
            {/*    Hello*/}
            {/*</div>*/}
            {/*<div className={m.message}>*/}
            {/*    How are you?*/}
            {/*</div>*/}
            {/*<div className={m.message}>*/}
            {/*    What is your name?*/}
            {/*</div>*/}
            <MessageItem content='Hello'/>
            <MessageItem content='How are you?'/>
            <MessageItem content='What is your name?'/>

        </div>
    )
}

export default MessageList