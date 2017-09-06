import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'
import BooksGrid from './BooksGrid'
import * as BooksAPI from './BooksAPI'
import * as utils from './utils'

class Search extends React.Component {
  state = {
    query: '',
    results: [],
  }

  mergeMyBooksWithSearchResults(myBooks, searchResults) {
    return searchResults.map(r => {
      const myBook = _.find(myBooks, b => b.id === r.id) || {}
      return { ...r, shelf: myBook.shelf || 'none' }
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ results: this.mergeMyBooksWithSearchResults(nextProps.myBooks, this.state.results) })
  }

  search(query) {
    this.setState({ query })
    BooksAPI.search(query).then(results => {
      const searchResults = results && !results.error ? utils.formatBookResults(results) : []
      this.setState({
        results: this.mergeMyBooksWithSearchResults(this.props.myBooks, searchResults)
      })
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              value={this.state.query}
              placeholder="Search by title or author"
              onChange={event => this.search(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={this.state.results} updateBook={this.props.updateBook}/>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  myBooks: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default Search