import React from 'react'
import Styles from './MainStyle'
import MoviesList from './MoviesList/MoviesList'
import MoviesSection from './MoviesSection/MoviesSection'
import FilmDetails from '../FilmDetails/FilmDetails'

function Main() {
  return (
    <Styles>
       {/* <FilmDetails /> */}
       <MoviesList />
       <MoviesSection />
    </Styles>
  )
}

export default Main