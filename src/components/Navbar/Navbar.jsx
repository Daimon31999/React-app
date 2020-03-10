import React from "react";
import m from "./Navbar.module.css"
const Navbar = () => {
    return (
        <nav className={m.nav}>
            <div>
                <a href='/profile'>Profile</a>
            </div>
            <div>
                <a href='/dialogs'>Messages</a>
            </div>
            <div>
                <a href='/music'>Music</a>
            </div>
            <div className={m.settings}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar