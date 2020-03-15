import React from "react"
import m from './MyPosts.module.css'
import PostItem from "./PostList/Post/PostItem";
import Title from "./Title/Title";
import Input from "./Input/Input";
import Send from "./Send/Send";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hello World!!!'},
        {id: 2, message: 'I am Dima Hinev'}
    ]

    let posts = postsData.map(
        e => <PostItem message={e.message} id={e.id}/>
    )
    return (
        <React.Fragment>
            <Title/>
            <Input/>
            <Send/>
            <div className={m.posts}>
                {posts}
            </div>
        </React.Fragment>
    )
}

export default MyPosts