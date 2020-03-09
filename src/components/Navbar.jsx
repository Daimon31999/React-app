import React from "react";
import m from "./Navbar.module.css"
const Navbar = () => {
    return (
        <nav className={m.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div className={m.settings}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar