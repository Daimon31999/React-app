import React from "react"
import m from './Input.module.css'

export let inputRef = React.createRef()
const Input = () => {
    return (
        <div className={m.textArea}>
            {/*<input ref={inputRef} type="text" id="new_post" name="new_post" placeholder='your news...'/>*/}
            <textarea ref={inputRef} type="text" id="new_post" name="new_post" placeholder='your news...'/>
        </div>
    )
}

export default Input
