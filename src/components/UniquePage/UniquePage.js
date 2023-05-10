import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Styles from './UniquePageStyle';
import { fetchUniquePageFilm } from '../../store/slice/uniquePage/uniquePageApi';
import { selectUniquePageFilm } from '../../store/slice/uniquePage/uniquePageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Rate } from 'antd';
import SimilarMovies from '../SimilarMovies/SimilarMovies';

function UniquePage() {
  const dispatch = useDispatch();
  const film = useSelector(selectUniquePageFilm);
 
  const { t, i18n} = useTranslation()
  const { id } = useParams() 
  // console.log("id", id)
  const [value, setValue] = useState(3);
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  
  
  useEffect(() => {
    dispatch(fetchUniquePageFilm({url:`${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=c90960472340983f37679878e271035a&language=${i18n.language}`}))
  }, [i18n.language, id])
  
  // console.log("film", film)

   return (
    <Styles>
      <div className='UniquePage-section'>
        <div>
           <img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film.data?.poster_path}`} alt=""/>
        </div>
        <ul>
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
     <Rate tooltips={desc} onChange={setValue} value={value} count={10}/>
        <div className='Movie-votes'>
          <p>{t("uniquePage.movieRating")} {film.data?.vote_average}</p>
          <p>{t("uniquePage.totalVotes")} {film.data?.vote_count}</p>
        </div>
     </div>
     <div className="lds-facebook"><div></div><div></div><div></div></div>

     {/* <div className='movie-video'></div> */}
     <SimilarMovies/>
    </Styles>
  )
}

export default UniquePage



