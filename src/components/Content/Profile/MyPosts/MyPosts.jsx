import React from "react"
import m from './MyPosts.module.css'
import Post from "./Post/Post";
import Title from "./Title/Title";
import Input from "./Input/Input";
import Send from "./Send/Send";

const MyPosts = () => {
    return (
        <React.Fragment>
            <Title/>
            <Input/>
            <Send/>
            <div className={m.posts}>
                    <Post message='Hello World'/>
                    <Post message='I am Dima Hinev'/>
            </div>
        </React.Fragment>
    )
}

export default MyPosts