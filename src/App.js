import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Navbar from "./components/Navbar/Navbar"
import Dialogs from "./components/Dialogs/Dialogs";
import m from "./components/Profile/Profile.module.css";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={m.content}>
                <Profile/>
                <Dialogs/>
            </div>
        </div>
    );
};

export default App;

