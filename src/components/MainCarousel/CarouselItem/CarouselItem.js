import React from 'react'
import Styles from './CarouselItemStyle'

function CarouselItem(film) {
  return (
    <Styles>
      <img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`} alt=""/>
      <p>{film?.title}</p>
    </Styles>
  )
}

export default CarouselItem