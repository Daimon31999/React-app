import React from "react"
import MyPosts from "./MyPosts/MyPosts";
import Image from "./Image/Image";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import m from './Profile.module.css'

const Profile = () => {
    return (
        <div className={m.content}>
            <Image/>
            <Avatar/>
            <Description user_name='Dima Hinev'/>
            <MyPosts/>
        </div>

    )
}

export default Profile