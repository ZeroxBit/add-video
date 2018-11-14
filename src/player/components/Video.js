import React, { Component } from 'react'
import './Video.css';

export class Video extends Component {
    render() {
        return (
            <div className="Video">
                <video 
                    src={this.props.src}
                    autoPlay={this.props.autoPlay}
                />
            </div>
        )
    }
}

export default Video
