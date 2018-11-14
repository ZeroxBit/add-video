import React from 'react'
import './TitleVideo.css';

const TitleVideo = (props) => {
    return (
        <div className="Title">
            <h2>{props.title}</h2>
        </div>
    )
}

export default TitleVideo
