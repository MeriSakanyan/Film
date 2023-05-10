import React from 'react';
import Styles from './MainStyle';
import MoviesSection from './MoviesSection/MoviesSection';


function Main({children}) {
  return (
    <Styles>
      {children}
    </Styles>
  )
}

export default Main