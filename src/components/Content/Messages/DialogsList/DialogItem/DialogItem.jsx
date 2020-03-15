import m from "../DialogsList.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Dialog = (props) => {
    let path = `/messages/${props.index}`
    return (
        <div className={m.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog