import React from "react"
import m from './MyPosts.module.css'
import PostItem from "./PostList/Post/PostItem";
import Title from "./Title/Title";
import Input from "./Input/Input";
import Send from "./Send/Send";
import PostList from './PostList/PostList'

const MyPosts = (props) => {
    return (
        <React.Fragment>
            <Title/>
            <Input/>
            <Send/>
            <div className={m.posts}>
               <PostList content={props.posts}/>
            </div>
        </React.Fragment>
    )
}

export default MyPosts