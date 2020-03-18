import ReactDOM from 'react-dom'
import App from './App'
import {addPost, updateNewPostText} from './components/redux/state'
import React from 'react'

export let reRender = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>, document.getElementById('root')
    )
}