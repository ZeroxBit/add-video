import React from 'react'
import './Search.css'

const Search = (props) => (
    <form 
        action="" 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <input 
            ref = {props.setRef}
            type="text" 
            placeholder="buscar ..."
            className="Search-input"
            name="search"
            value={props.value}
            onChange={props.handleChange}
        />
    </form>
)


export default Search
