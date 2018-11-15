import React, { Component } from 'react'
import './Video.css';

export class Video extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay()
        }
    }

    togglePlay = () => {
        if (this.props.pause) {
            this.video.play()
        }
        this.video.pause()
    }

    setRef = (e) => {
        this.video = e
    }

    render() {
        return (
            <div className="Video">
                <video 
                    src={this.props.src}
                    autoPlay={this.props.autoplay}
                    ref = {this.setRef}
                />
            </div>
        )
    }
}

export default Video
