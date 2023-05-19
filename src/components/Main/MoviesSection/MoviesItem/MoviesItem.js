import React from 'react';
import Styles from './MoviesItemStyle';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function MoviesItem(film) {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Styles>
      <div  onClick={ () => {navigate('/movie/'+film.id)}}>
        <Card
        hoverable
        cover={<LazyLoadImage
        src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`}
        alt="Image"
        effect='blur'
        />}
        >
          <div className='Top-movies-desc'>
            <p>{film.title}</p>

            <div>
              <span>{t("mainPage.year")}</span> <strong>{film.release_date}</strong>
            </div>

            <div>
              <span>{t("mainPage.totalVotes")}</span> <strong>{film.vote_count}</strong>
            </div>
            
          </div>

          <div className='vote_average'>{film.vote_average}</div>
        </Card>
      </div>
    </Styles>
  )
}

export default MoviesItem

