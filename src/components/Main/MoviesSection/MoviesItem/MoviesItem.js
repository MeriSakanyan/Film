import React from 'react'
import Styles from './MoviesItemStyle'
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

function MoviesItem(film) {
  const navigate = useNavigate()

  return (
    <Styles>
      <div  onClick={ () => {navigate('/movie/'+film.id)}}>
      <Card
        hoverable
        cover={<img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`} alt=""/>}
    >
    <div className='Top-movies-desc'>
        <Meta title={film.title} description={film.release_date}  />
        <Meta description={film.vote_count} />
    </div>
    <div className='vote_average'>{film.vote_average}</div>
      </Card>
      </div>
    </Styles>
  )
}

export default MoviesItem

