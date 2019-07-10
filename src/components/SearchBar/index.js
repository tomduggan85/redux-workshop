import React from 'react'
import './styles.css'

class SearchBar extends React.Component {

  render() {
    return (
      <div className='search-bar'>
        <span className='search-bar-logo' role='img' aria-label='camera'>🎥</span>
        <form>
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