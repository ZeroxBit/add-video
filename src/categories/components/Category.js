import React from 'react'
import PlayList from '../../playlist/components/PlayList'

const Category = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            
            <PlayList 
                playList={props.playlist}
            />
                
        </div>
    )
}
export default Category