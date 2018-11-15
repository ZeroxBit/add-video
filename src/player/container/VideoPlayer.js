import React, { Component } from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/Video';
import TitleVideo from '../components/TitleVideo';
import PayPause from '../components/PlayPause';

export class VideoPlayer extends Component {

    state ={
        pause : true
    }

    componentDidMount() {
        this.setState({
            pause : (!this.props.autoPlay)
        })
    }

    handleTogglePlay = () => {
        this.setState({
            pause : !this.state.pause
        })
    }

    render() {
        return (
            <VideoPlayerLayout>
                <TitleVideo 
                    title="titulo video"
                />
                <PayPause 
                    pause ={this.state.pause}
                    handleClick={this.handleTogglePlay}
                />
                <Video 
                    autoPlay={this.props.autoPlay}
                    pause ={this.state.pause}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer
