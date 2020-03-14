import React from "react";
import m from './Message.module.css'
import {NavLink} from "react-router-dom";
const Message = () => {
    return (
        <div className={m.messages_wrapper}>
            <div className={m.dialogs}>
                <div className={`${m.dialog} ${m.active}`}>
                    <NavLink to='/messages/1'>Димон</NavLink>
                </div>
                <div className={m.dialog}>
                    <NavLink to='/messages/2'>Илюха</NavLink>
                </div>
                <div className={m.dialog}>
                    <NavLink to='/messages/3'>Максимка</NavLink>
                </div>
                <div className={m.dialog}>
                    <NavLink to='/messages/4 '>Даник</NavLink>
                </div>

            </div>
            <div className={m.messages}>
                <div className={m.message}>
                    Hello
                </div>
                <div className={m.message}>
                    How are you?
                </div>
                <div className={m.message}>
                    What is your name?
                </div>
            </div>
        </div>
    )
}

export default Message