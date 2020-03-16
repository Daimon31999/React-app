import React from "react"
import m from './Messages.module.css'
import Dialogs from "./DialogsList/DialogsList"
import MessageList from "./MessageList/MessageList"
import Input from '../Profile/MyPosts/Input/Input'
import Send from '../Profile/MyPosts/Send/Send'

const Messages = (props) => {
    return (
        <div className={m.messages}>
            <Dialogs content={props.dialogs}/>
            <MessageList content={props.messages}/>
            <Input/>
            <div className={m.send_wrapp}>
                <div className={m.send}>
                    <Send/>
                </div>
            </div>
        </div>
    )
}

export default Messages