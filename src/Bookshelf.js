import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((b) => 
                            <li><Book title={b.title} author={b.author} coverURL={b.coverURL}/></li>
                        )}
                    </ol>
                </div>
            </div>                
        )
    }
}

export default Bookshelf