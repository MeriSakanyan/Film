import React from 'react';
import Styles from './CarouselItemStyle';
import {useNavigate} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function CarouselItem(film) {
  const navigate = useNavigate();

  return (
    <Styles>
      <div className='carousel_item' onClick={ () => {navigate('/movie/'+film.id)}}>
        <LazyLoadImage
        src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`} 
        alt=''
        effect='blur'
        />
        <p>{film?.title}</p>
      </div>
    </Styles>
  )
}

export default CarouselItem