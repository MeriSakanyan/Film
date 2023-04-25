import React from 'react'
import Styles from './MainStyle'
import MoviesList from './MoviesList/MoviesList'
import MoviesSection from './MoviesSection/MoviesSection'

function Main() {
  return (
    <Styles>
       <MoviesList />
       <MoviesSection />
    </Styles>
  )
}

export default Main