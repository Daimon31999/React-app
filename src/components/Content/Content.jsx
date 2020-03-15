import React from "react"
import m from "./Content.module.css"
import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./Messages/DialogsList/DialogsList";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";
import Messages from "./Messages/Messages";


const Content = () => {
    return (
        <div className={m.content}>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/messages' component={Messages}/>
            <Route exact path='/settings' component={Settings}/>
            <Route exact path='/music' component={Music}/>
        </div>
    )
}

export default Content