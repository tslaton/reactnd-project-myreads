import React from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends React.Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.bookState.shelf} onChange={(event) => {
                        this.props.onShelfChange(event.target.value)}
                    }>
                    <option value="none" disabled>Move to...</option>
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
    bookState: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}

export default ShelfChanger