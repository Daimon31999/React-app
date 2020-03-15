import React from "react"
import m from './PostList.module.css'
import PostItem from "./Post/PostItem"

const PostList = (props) => {
    let posts = props.content.map(
        e => <PostItem message={e.message} id={e.id}/>
    )
    return (
        <div className={m.posts}>
            {posts}
        </div>
    )
}

export default PostList