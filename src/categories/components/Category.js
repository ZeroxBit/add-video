import React from 'react'
import PlayList from '../../playlist/components/PlayList'
import './Category.css'

const Category = (props) => {
    return (
        <div className="Category">
            <h2 className="Category-title">{props.title}</h2>
            <p className="Category-description">{props.description}</p>
            
            <PlayList 
                handleOpenModal={props.handleOpenModal}
                playList={props.playlist}
            />
                
        </div>
    )
}
export default Category