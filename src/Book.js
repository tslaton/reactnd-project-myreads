import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(${this.props.coverURL})`
                    }}></div>
                    <ShelfChanger shelf={this.props.shelf} changeShelf={this.props.updateShelf}/>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    coverURL: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired,    
}

export default Book