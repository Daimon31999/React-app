import React from "react";
import m from './Header.module.css'
import apple_logo from './../../img/apple_logo2.png'

const Header = () => {
    return (
        <div className={m.header}>
            <img src={apple_logo} alt=""/>
        </div>
    )
}
export default Header