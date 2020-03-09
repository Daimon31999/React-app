import React from "react"
import Header from "./../img/react.png"
import Profile_photo from "./../img/profile_photo.jpg"
import './Profile.css'
const Profile = () => {
    return (
        <div className='content'>
            <div className='content__header'>
                <img src={Header} alt=""/>
            </div>
                <div className='ava'>
                    <img src={Profile_photo} alt=""/>
                </div>
                <div className='description'>
                    <div className='description_name'>
                        Dima Hinev
                    </div>
                    <div className='description_info'>
                        <span>Date of Birth: 14 september</span>
                        <span>City: Chisinau</span>
                        <span>Email: dimahinev31999@gmail.com</span>
                    </div>
                </div>
                    <div className="posts__title">
                        My posts
                    </div>
                    <div className='posts__input'>
                        <input type="text" id="new_post" name="new_post" placeholder='your news...'/>
                    </div>
                    <div className="posts__send">
                        <button>Send</button>
                    </div>
                    <div className='posts__list'>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
    )
}

export default Profile