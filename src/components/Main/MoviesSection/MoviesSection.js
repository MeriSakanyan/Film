import React from 'react';
import Styles from './MoviesSectionStyle';
import TopMovies from './TopMovies/TopMovies';
import Cinema from './Cinema/Cinema';
import { useLocation } from 'react-router-dom';

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