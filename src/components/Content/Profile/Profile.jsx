import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import Image from "./Image/Image"
import Avatar from "./Avatar/Avatar"
import Description from "./Description/Description"
import m from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={m.content}>
            <Image/>
            <Avatar/>
            <Description user_name='Dima Hinev'/>
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>

    )
}

export default Profile