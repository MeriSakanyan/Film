import React from 'react';
import Styles from './MoviesSectionStyle';
import { useLocation } from 'react-router-dom';
import TopMovies from './TopMovies/TopMovies';
import Cinema from './Cinema/Cinema';

function MoviesSection() {
  const location = useLocation();
 
  return (
    <Styles>
        <TopMovies />
        {!location.pathname.includes('/movie') && (
           <Cinema />
        )}
    </Styles>
  )
}

export default MoviesSection