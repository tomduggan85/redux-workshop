import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const MOVIE_POSTER_URL_PREFIX = 'https://image.tmdb.org/t/p/w780' /* Prepend this to the the movie poster_path or backdrop_path to get a full image src */

const MovieDetailsPage = ( props ) => {
  
  /* TODO: Connect to redux and display movie details based on 
  props.match.params.movieIndex
  
  you can display:
  movie.backdrop_path or movie.poster_path,
  movie.original_title,
  movie.overview
  */

  return (
    <div className='movie-details'>
      <Link className='back-button' to='/'>&lt; Back</Link>
    </div>
  )
}

export default MovieDetailsPage