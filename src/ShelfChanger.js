import React from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends React.Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.shelf} onChange={event => this.props.changeShelf(event.target.value)}>
          <option value="n/a" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

ShelfChanger.propTypes = {
  shelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
}

export default ShelfChanger