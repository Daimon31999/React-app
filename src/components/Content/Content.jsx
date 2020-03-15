import React from "react"
import m from "./Content.module.css"
import Profile from "./Profile/Profile"
import {Route} from "react-router-dom"
import Settings from "./Settings/Settings"
import Music from "./Music/Music"
import Messages from "./Messages/Messages"


const Content = (props) => {
    return (
        <div className={m.content}>
            <Route exact path='/profile' render={() => <Profile posts={props.posts}/>}/>
            <Route exact path='/messages' render={() => <Messages dialogs={props.dialogs} messages={props.messages}/>}/>
            <Route exact path='/settings' render={() => <Settings/>}/>
            <Route exact path='/music' render={() => <Music/>}/>
        </div>
    )
}

export default Content