import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Styles from './UniquePageStyle';
import { fetchUniquePageFilm } from '../../store/slice/uniquePage/uniquePageApi';
import { selectUniquePageFilm } from '../../store/slice/uniquePage/uniquePageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Rate } from 'antd';
import SimilarMovies from '../SimilarMovies/SimilarMovies';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function UniquePage() {
  const dispatch = useDispatch();
  const film = useSelector(selectUniquePageFilm);
  const { t, i18n} = useTranslation()
  const { id } = useParams() 

  useEffect(() => {
    dispatch(fetchUniquePageFilm({url:`${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=c90960472340983f37679878e271035a&language=${i18n.language}`}))
  }, [i18n.language, id])

   return (
    <Styles>
      <div className='UniquePage-section'>
        <div>
           <LazyLoadImage
           src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film.data?.poster_path}`}
           alt=""
           effect='blur'
           />
        </div>
        <ul className='details_list'>
            <li className='Details_bg'><span>{t("uniquePage.title")}</span> <strong>{film.data?.title}</strong></li>
            <li><span>{t("uniquePage.originalTitle")}</span> <strong>{film.data?.original_title}</strong></li>
            <li className='Details_bg'><span>{t("uniquePage.year")}</span> <strong>{film.data?.release_date}</strong></li>
            <li><span>{t("uniquePage.genre")}</span> <strong>{film.data?.genres?.map(({ name }) => name).join(', ')}</strong></li>
            <li className='Details_bg'><span>{t("uniquePage.duration")}</span> <strong>{film.data?.runtime}{t("uniquePage.minute")}</strong></li>
            <li><span>{t("uniquePage.productionCountries")}</span> <strong>{film.data?.production_countries?.map(({ name }) => name).join(', ')}</strong></li>
            <li className='Details_bg'><span>{t("uniquePage.budget")}</span> <strong>{film.data?.budget}$</strong></li>
         </ul>
      </div>

      <div className='movie-description'>
        <h5>About film</h5>
        <p>{film.data?.overview}</p>
      </div>

     <div className='movie-rating'>
     <span>
      {/* <StarsRate /> */}
     <Rate allowHalf disabled value={film?.data?.vote_average} count={10} />
    </span>
        <div className='Movie-votes'>
          <p>{t("uniquePage.movieRating")} {film.data?.vote_average}</p>
          <p>{t("uniquePage.totalVotes")} {film.data?.vote_count}</p>
        </div>
     </div>
     
     <div className='movie-video'>
     </div>
     <SimilarMovies/>
    </Styles>
  )
}

export default UniquePage



