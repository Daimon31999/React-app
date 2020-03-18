import {reRender} from '../../render'

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello World!!!'},
            {id: 2, message: 'I am Dima Hinev'}
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Ilia'},
            {id: 3, name: 'Maxik'},
            {id: 4, name: 'Danik'},
            {id: 5, name: 'Kiril'}
        ],
        messages: [
            {id: 1, message: 'Hello World'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What is your name?'}
        ]
    }
}

export let addPost = () => {
    let post = {id: 5, message: state.profilePage.newPostText}
    state.profilePage.posts.push(post)
    reRender(state)
}

export let updateNewPostText = (message) => {
    state.profilePage.newPostText = message
    reRender(state)
}

export default state