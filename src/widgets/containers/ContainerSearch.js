import React, { Component } from 'react'
import Search from '../components/Search';

export class ContainerSearch extends Component {

    state={
        value:"daddy"
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.input.value)
    }

    setRefInput = (e) => {
        this.input = e
    }

    handleInputChange = (e) => {
        this.setState({
            value : e.target.value.replace(" ", "-")
        })
    }

    render() {
        return (
            <Search 
                setRef ={this.setRefInput}
                handleSubmit={this.handleSubmit}
                handleChange = {this.handleInputChange}
                value ={this.state.value}
            />
        )
    }
}

export default ContainerSearch
