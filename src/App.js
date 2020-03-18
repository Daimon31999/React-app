import React from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter} from "react-router-dom"
import Content from "./components/Content/Content"

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Content dialogs={props.state.messagesPage.dialogs}
                         messages={props.state.messagesPage.messages}
                         posts={props.state.profilePage.posts}
                         addPost={props.addPost}
                         updateNewPostText={props.updateNewPostText}
                />
            </div>
        </BrowserRouter>
    )
}

export default App
