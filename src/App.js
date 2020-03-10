import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Content/Profile/Profile'
import Navbar from "./components/Navbar/Navbar"
import Dialogs from "./components/Content/Dialogs/Dialogs";
import m from "./components/Content/Profile/Profile.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={m.content}>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

