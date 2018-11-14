import React, { Component } from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/Video';
import TitleVideo from '../components/TitleVideo';

export class VideoPlayer extends Component {
    render() {
        return (
            <VideoPlayerLayout>
                <TitleVideo 
                    title="titulo video"
                />
                <Video 
                    autoPlay={false}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer
