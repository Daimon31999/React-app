import React from "react"
import m from './PostList.module.css'
import PostItem from "./Post/PostItem";

const PostList = () => {
    let postsData = [
        {id: 1, message: 'Hello World!!!'},
        {id: 2, message: 'I am Dima Hinev'}
    ]

    let posts = postsData.map(
        e => <PostItem message={e.message} id={e.id}/>
    )
    return (
        <div className={m.posts}>
            {posts}
        </div>
    )
}

export default PostList