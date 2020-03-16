import m from "./DialogItem.module.css"
import {NavLink} from "react-router-dom"
import React from "react"
import Profile_photo from "../../../../../img/profile_photo.jpg"


const DialogItem = (props) => {
    let path = `/messages/${props.index}`
    return (
        <NavLink className={m.dialog} to={path}>
            <img src={Profile_photo} alt=""/>
            {props.name}
        </NavLink>
    )
}

export default DialogItem