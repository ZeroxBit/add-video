import React from 'react'
import Media from './media';
import './playlist.css';


const PlayList = (props) => {
    return (
        <div className='Playlist'>
            {
                props.playList.map( (item)=> {
                    return (
                        <Media 
                            key = {item.id}
                            item = {{...item}}
                        />
                    )
                })
            }   
        </div>
    )
  
}

export default PlayList;