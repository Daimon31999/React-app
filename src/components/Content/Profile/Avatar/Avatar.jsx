import React from "react"
import Profile_photo from "../../../../img/profile_photo.jpg"
import m from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={m.ava}>
            <img src={Profile_photo} alt=""/>
        </div>
    )
}

export default Avatar