import React from "react"
import MyPosts from "./MyPosts/MyPosts";
import Image from "./Image/Image";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";

const Profile = () => {
    return (
        <React.Fragment>
            <Image/>
            <Avatar/>
            <Description user_name='Dima Hinev'/>
            <MyPosts/>
        </React.Fragment>
    )
}

export default Profile