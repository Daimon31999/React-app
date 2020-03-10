import React from "react"
import m from './Post.module.css'

const Post = (props) => {
    return (
        <div className={m.item}>
            {props.message}
        </div>
    )
}

export default Post