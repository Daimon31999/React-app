import React from "react"
import m from './Post.module.css'

const PostItem = (props) => {
    return (
        <div className={m.item}>
            {props.message}
        </div>
    )
}

export default PostItem