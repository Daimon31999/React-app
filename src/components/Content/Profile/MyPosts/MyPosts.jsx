import React from "react"
import m from './MyPosts.module.css'
import Post from "./Post/Post";
import Title from "./Title/Title";
import Input from "./Input/Input";
import Send from "./Send/Send";

const MyPosts = () => {
    let posts = [
        {id: 1, message:'Hello World!!!'},
        {id: 2, message:'I am Dima Hinev'}
    ]
    return (
        <React.Fragment>
            <Title/>
            <Input/>
            <Send/>
            <div className={m.posts}>
                    <Post message={posts[0].message} id={posts[0].id}/>
                    <Post message={posts[1].message} id={posts[1].id}/>
            </div>
        </React.Fragment>
    )
}

export default MyPosts