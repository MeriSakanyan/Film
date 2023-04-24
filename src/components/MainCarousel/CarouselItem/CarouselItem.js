import React from 'react'
import Styles from './CarouselItemStyle'

function CarouselItem({film}) {
  return (
    
    <Styles>
      <img src = {`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${film.poster_path}`} alt=""/>
      <p>{film.title}</p>
    </Styles>
  )
}

export default CarouselItem