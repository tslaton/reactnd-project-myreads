import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'
import * as BooksAPI from './BooksAPI'
import * as utils from './utils'

class Search extends React.Component {
    state = {
        query: '',
        results: [],
    }

    search(query) {
        BooksAPI.search(query).then(results => {
            if (Array.isArray(results) && !results.error) {
                this.setState({ 
                    query: query,
                    results: utils.formatBookResults(results) 
                })
            } else {
                this.setState({ query })
            }
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
    updateBook: PropTypes.func.isRequired,
}

export default Search