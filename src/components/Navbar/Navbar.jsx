import React from "react";
import m from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={m.nav}>
            <div>
                <NavLink to='/profile' activeClassName={m.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages' activeClassName={m.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={m.active}>Music</NavLink>
            </div>
            <div className={m.settings}>
                <NavLink to='/settings' activeClassName={m.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar