import React from 'react'
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import './PlayPause.css'

const PlayPause = (props) => {
    return (
        <div className="PlayPause">
            {
                props.pause 
                ?
                    <button
                        onClick={props.handleClick}
                    >
                        <Play size ={25} color="#fff"/>
                    </button>
            
                :

                    <button
                        onClick={props.handleClick}            
                    >
                        <Pause size ={25} color="#fff"/>
                    </button>

            }
        </div>
    )
}

export default PlayPause
