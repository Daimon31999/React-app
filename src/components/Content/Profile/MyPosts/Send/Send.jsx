import React from "react"
import m from './Send.module.css'
import {inputRef} from '../Input/Input'

const Send = (props) => {
    let addPost = () => {
        props.addPost()
        inputRef.current.value = ''
    }
    return (
        <div className={m.posts__send}>
            <button onClick={addPost}>Send</button>
        </div>
    )
}

export default Send
