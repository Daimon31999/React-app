import React from "react"
import m from './Input.module.css'

export let inputRef = React.createRef()
const Input = (props) => {
    return (
        <div className={m.textArea}>
            <textarea ref={inputRef}
                      id="new_post"
                      name="new_post"
                      placeholder='your news...'
                      onChange={() => props.updateNewPostText(inputRef.current.value)}
            />
        </div>
    )
}

export default Input
