import React from 'react'
import Styles from './CarouselItemStyle'
import {useNavigate} from 'react-router-dom';


function CarouselItem(film) {

  const navigate = useNavigate();

  return (
    <Styles>
      <div onClick={ () => {navigate('/movie/'+film.id)}}>
        <img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`} alt=""/>
        <p>{film?.title}</p>
      </div>
    </Styles>
  )
}

export default CarouselItem