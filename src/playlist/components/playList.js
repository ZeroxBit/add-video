import React from 'react'
import Media from './media';
import './playlist.css';
import Play from '../../icons/components/play';

function PlayList (props) {
    const platList = props.data.categories[0].playlist;

    return (
      <div className='Playlist'>
      <Play 
        size = {32}
        color = "green"
      />
        {
            platList.map( (item)=> {
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