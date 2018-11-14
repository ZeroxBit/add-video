import React, { Component } from 'react'
import RegularError from '../components/RegularError'


class HandleError extends Component {

    state={
        handleHandle:false
    }

    componentDidCatch(error, info) {
        this.setState({
            handleError:true
        })
    }
    render() {
        if (this.state.handleError) {
            return <RegularError />
            
        }
        return (
            this.props.children
        )
    }
}

export default HandleError
