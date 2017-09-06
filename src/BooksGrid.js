import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksGrid extends React.Component {
  render() {
    return (
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
    )
  }
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default BooksGrid