import React from 'react'
import Category from './Category';
import './Categories.css';
import ContainerSearch from '../../widgets/containers/ContainerSearch';

const Categories = (props) => {
    return (
        <div className="Categories">
            <ContainerSearch />
            {
                props.categories.map( (item)=>{
                    return (
                        <Category 
                            key={item.id} 
                            handleOpenModal= {props.handleOpenModal}
                            {...item}
                        />)
                })
            }
        </div>
    )
  
}

export default Categories
