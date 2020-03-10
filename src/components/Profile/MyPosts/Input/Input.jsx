import React from "react"
import m from './Input.module.css'

const Input = () => {
    return (
        <div className={m.posts__input}>
            <input type="text" id="new_post" name="new_post" placeholder='your news...'/>
        </div>
    )
}

export default Input