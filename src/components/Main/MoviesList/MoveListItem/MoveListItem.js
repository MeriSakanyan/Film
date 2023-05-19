import React from 'react';
import Styles from './MoveListItemStyle';
import { Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from '../../../Spinner/Spinner';

function MoveListItem(film) {
  const navigate = useNavigate()

  return (
    <Styles>
      <div className='moviesItem_container' onClick={ () => {navigate(`/movie/${film.id}`)}}>
        <LazyLoadImage
        src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`}
         alt="Image"
         placeholder={<Spinner />}
         />
        <Rate allowHalf disabled value={film?.vote_average} count={10} />
        <p>{film?.title}</p>
      </div>
    </Styles>
  )
}

export default MoveListItem
