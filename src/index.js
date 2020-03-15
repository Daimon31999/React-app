import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

let dialogsArr = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Ilia'},
    {id: 3, name: 'Maxik'},
    {id: 4, name: 'Danik'},
    {id: 5, name: 'Kiril'}
]

let messagesArr = [
    {id: 1, message: 'Hello World'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What is your name?'}
]

let postsData = [
    {id: 1, message: 'Hello World!!!'},
    {id: 2, message: 'I am Dima Hinev'}
]

ReactDOM.render(<App dialogs={dialogsArr} messages={messagesArr} posts={postsData}/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
