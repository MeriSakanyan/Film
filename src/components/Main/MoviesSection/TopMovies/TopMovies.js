import React, { useEffect, useState } from 'react'
import Styles from './TopMoviesStyle'
import MoviesItem from '../MoviesItem/MoviesItem'
import { SyncOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectTopMovies } from '../../../../store/slice/topMovies/topMoviesSlice'
import { useTranslation } from 'react-i18next'
import { fetchTopMovies } from '../../../../store/slice/topMovies/topMoviesApi'



function TopMovies() {

  const dispatch = useDispatch();
  const topMoviesList = useSelector(selectTopMovies);
  const { t, i18n} = useTranslation();
  const [page, setPage] = useState( Math.floor(Math.random() * (500 - 1 + 1)) + 1)

  useEffect(() => {
    dispatch(fetchTopMovies({url:`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=${page}`}))
  }, [i18n.language, page])

  return (
    <Styles>
        <div className='Top-Movies-header'>
        <h1>{t("mainPage.topMovies")}</h1>
        <SyncOutlined onClick={()=>setPage(page+1)} className='update-btn' />
        </div>

        <div className='Top_Movies_main'>
      {
        topMoviesList?.data?.results && topMoviesList?.data?.results.slice(0, 10).map((film) => 
        <div key={film.id}>
          <MoviesItem {...film}/>
        </div>
        )
      }
        </div>
    </Styles>
  )
}

export default TopMovies