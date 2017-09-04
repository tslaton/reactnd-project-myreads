import React from 'react'
import { Route, Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import * as utils from './utils'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState({ books: utils.formatBookResults(books) })
    )
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
          <Search updateBook={this.updateBook.bind(this)}/>
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
