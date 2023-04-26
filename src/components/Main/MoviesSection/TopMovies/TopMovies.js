import React from 'react'
import Styles from './TopMoviesStyle'
import MoviesItem from '../MoviesItem/MoviesItem'


function TopMovies() {
  return (
    <Styles>
        <h1>Top Movies</h1>
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
        <MoviesItem />
    </Styles>
  )
}

export default TopMovies