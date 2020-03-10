import React from "react"
import m from './Description.module.css'

const Description = (props) => {
    return (
        <div className={m.description}>
            <div className={m.user_name}>
                {props.user_name}
            </div>
            <div className={m.user_info}>
                <span>Date of Birth: 14 september</span>
                <span>City: Chisinau</span>
                <span>Email: dimahinev31999@gmail.com</span>
                {/*{ props.user_info }*/}
            </div>
        </div>
    )
}

export default Description