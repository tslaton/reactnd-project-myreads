import React from 'react'
import { Route, Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ 
        books: books.map(b => ({
          id: b.id,
          title: b.title,
          authors: b.authors.reduce((author, acc) => author ? `${acc}, ${author}` : acc, ''),
          coverURL: b.imageLinks.thumbnail,
          shelf: b.shelf,
        }))
      })
    })
  }

  updateBook(book, shelf) {
    this.setState(prevState => ({
      books: prevState.books.map(b => b.id === book.id ? {...b, shelf} : b)
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() =>
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
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        }/>
        <Route exact path='/' render={() =>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf 
                  shelfTitle="Currently Reading" 
                  books={this.state.books.filter(b => b.shelf === 'currentlyReading')}
                  updateBook={this.updateBook.bind(this)}
                />
                <Bookshelf 
                  shelfTitle="Want to Read" 
                  books={this.state.books.filter(b => b.shelf === 'wantToRead')}
                  updateBook={this.updateBook.bind(this)}                
                />
                <Bookshelf 
                  shelfTitle="Read" 
                  books={this.state.books.filter(b => b.shelf === 'read')}
                  updateBook={this.updateBook.bind(this)}                  
                />                
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        }/>
      </div>
    )
  }
}

export default BooksApp
