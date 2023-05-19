import React from 'react'
import Styles from './SimilarMoviesItemStyle'
import {useNavigate} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from '../../../Spinner/Spinner';

function SimilarMoviesItem(film) {
    const navigate = useNavigate();

  return (
        <Styles>
      <div onClick={ () => {navigate('/movie/'+film.id)}}>
        <LazyLoadImage
        src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`}
        alt="Image"
        placeholder={<Spinner />}
        />
        <p>{film?.title}</p>
      </div>
    </Styles>
  )
}

export default SimilarMoviesItem