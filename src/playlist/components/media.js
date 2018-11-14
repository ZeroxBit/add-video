import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
    state = {  // es7
        // author : "Carlos"
    }


    // handleClick = (e) => {
    //     this.setState({
    //         author : "carlitos"
    //     })
    // }

    render() {
        const { cover, title, author } = this.props.item
        return (
            <div className="Media" onClick={this.props.handleClick}>
                <div className="Media-cover">
                    <img 
                        src= {cover} 
                        alt="" 
                        width = {240}
                        height = {160}
                        className = "Media-image"
                    />
                    <h3 className="Media-title"> {title} </h3>
                    <p className="Media-author"> {author} </p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover : PropTypes.string,
    title: PropTypes.string,
    author:PropTypes.string,
    type : PropTypes.oneOf(['video','audio']) // valida lo que esta llegando
}

export default Media;