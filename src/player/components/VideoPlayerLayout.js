import React from 'react'
import './VideoPlayerLayout.css'

const VideoPlayerLayout = (props) => {
    return (
        <div className="VideoPlayer">
            {props.children}
        </div>
    )
}

export default VideoPlayerLayout
