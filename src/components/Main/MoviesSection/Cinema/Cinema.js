import React, { useEffect } from 'react';
import Styles from './CinemaStyle';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {selectCinemaMovies} from '../../../../store/slice/cinemaMovies/cinemaMoviesSlice';
import {fetchCinemaMovies} from '../../../../store/slice/cinemaMovies/cinemaMoviesAPI';
import MoviesItem from '../MoviesItem/MoviesItem';

function Cinema() {
  const dispatch = useDispatch();
  const cinemaMovies = useSelector(selectCinemaMovies);
  const { t, i18n} = useTranslation();

  useEffect(() => {
    dispatch(fetchCinemaMovies({url:`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=1`}))
  }, [i18n.language])

  return (
    <Styles>
        <h1>{t('mainPage.cinema')}</h1>
        <div className='Top_Movies_main'>
            {
              cinemaMovies?.data?.results  && cinemaMovies?.data?.results.slice(0, 10).map((film) => 
              <div key={film.id}>
                <MoviesItem {...film}/>
              </div>
              )
            }
        </div>
    </Styles>
  )
}

export default Cinema