import React from 'react';
import Styles from './MoviesSectionStyle';
import TopMovies from './TopMovies/TopMovies';
import Cinema from './Cinema/Cinema';

function MoviesSection() {
  return (
    <Styles>
        <TopMovies />
        <Cinema />
    </Styles>
  )
}

export default MoviesSection