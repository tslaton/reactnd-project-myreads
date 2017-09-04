import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(b => 
                            <li key={b.id}>
                                <Book 
                                    title={b.title} 
                                    authors={b.authors} 
                                    coverURL={b.coverURL} 
                                    shelf={b.shelf}
                                    updateShelf={shelf => this.props.updateBook(b, shelf)}
                                />
                            </li>
                        )}
                    </ol>
                </div>
            </div>                
        )
    }
}

Bookshelf.propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired,
}

export default Bookshelf