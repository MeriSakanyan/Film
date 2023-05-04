import React from 'react'
import Styles from './MainStyle'
import MoviesList from './MoviesList/MoviesList'
import MoviesSection from './MoviesSection/MoviesSection'
import UniquePage from '../UniquePage/UniquePage'

function Main({children}) {
  return (
    <Styles>
      {children}
       {/* <MoviesList /> */}
       <MoviesSection />
    </Styles>
  )
}

export default Main