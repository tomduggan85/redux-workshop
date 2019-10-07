import React from 'react'
import './styles.css'

class SearchBar extends React.Component {

  onChangeSearchText = ( e ) => {
    const searchString = e.target.value
    /* TODO: call action dispatcher to update the current search string */
  }

  onSubmit = () => {
    /* TODO: call action dispatcher to query TMDB endpoint */
  }

  onClickClearButton = () => {
    /* TODO: call action dispatcher to clear the current search string */
  }

  render() {

    /* TODO: Connect to redux and display the current search string */

    return (
      <div className='search-bar'>
        <span className='search-bar-logo' role='img' aria-label='camera'>🎥</span>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Search for a movie' />
          <div className='clear-search-button'>
            <span role='img' aria-label='clear'>✖️</span>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar