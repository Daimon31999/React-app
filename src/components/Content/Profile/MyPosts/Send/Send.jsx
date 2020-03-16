import React from "react"
import m from './Send.module.css'
import {inputRef} from '../Input/Input'

const Send = () => {
    let addPost = () => {
        let text = inputRef.current.value
        alert(text)
    }
    return (
        <div className={m.posts__send}>
            <button onClick={addPost}>Send</button>
        </div>
    )
}

export default Send
