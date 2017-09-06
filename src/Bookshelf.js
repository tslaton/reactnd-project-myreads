import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class Bookshelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={this.props.books} updateBook={this.props.updateBook}/>
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