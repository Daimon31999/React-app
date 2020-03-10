import React from "react"
import Header from "../../../img/react.png"
import m from './Image.module.css'

const Image = () => {
    return (
        <div className={m.header}>
            <img src={Header} alt=""/>
        </div>
    )
}

export default Image