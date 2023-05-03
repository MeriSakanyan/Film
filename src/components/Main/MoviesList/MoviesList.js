import React, { useEffect } from 'react'
import Styles from './MoviesListStyle'
import { Pagination } from 'antd';
import MoveListItem from './MoveListItem/MoveListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { selectMoviesList } from '../../../redux/slice/moviesList/moviesListSlice';
import { fetchMoviesList } from '../../../redux/slice/moviesList/moviesListApi';

function MoviesList() {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const filmList = useSelector(selectMoviesList);

  const { i18n} = useTranslation()

  useEffect(() => {
    dispatch(fetchMoviesList({url:`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=${page}`}))
  }, [i18n.language, page])

  
  return (
    <Styles>
       <Pagination
         defaultCurrent={1}
         current={page}
         total={5000} 
         onChange={(page) => setPage(page)}
       />
       <div className='MoviesList'>
           {
            filmList?.data?.results && filmList?.data?.results.map((film) => 
            <div key={film.id}>
              <MoveListItem {...film}/>
            </div>
            )
           }
       </div>
       <Pagination
         defaultCurrent={1}
         current={page}
         total={5000} 
         onChange={(page) => setPage(page)}
      />
    </Styles>
  )
}

export default MoviesList