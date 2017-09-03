import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {
    state = {
        shelf: this.props.initialShelf
    }

    changeShelf(shelf) {
        this.setState({ shelf })
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(${this.props.coverURL})`
                    }}></div>
                    <ShelfChanger bookState={this.state} onShelfChange={this.changeShelf.bind(this)}/>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        )
    }
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    coverURL: PropTypes.string.isRequired,
    initialShelf: PropTypes.string.isRequired,
}

export default Book