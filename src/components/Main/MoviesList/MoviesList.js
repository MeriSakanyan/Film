import React, { useEffect } from 'react'
import Styles from './MoviesListStyle'
import { Pagination } from 'antd';
import MoveListItem from './MoveListItem/MoveListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function MoviesList() {
  // const [page, setPage] = useState(1)
  // const dispatch = useDispatch();
  // const filmstate = useSelector((state) => state.film);
  // const { i18n} = useTranslation()

  // useEffect(() => {
  //   dispatch(fetchFilms( {url:`https://api.themoviedb.org/3/movie/popular?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=${page}`}))
  //   },[i18n.language, page])


  return (
    <div>
      MoviesList
    </div>
    // <Styles>
    //    <Pagination
    //      defaultCurrent={1}
    //      total={5000} 
    //      onChange={(page) => setPage(page)}
    //       />
    //    <div className='MoviesList'>

    //    {
    //     filmstate?.data?.results && filmstate?.data?.results.map((film,index) => 
    //     <div key={index}>
    //       <MoveListItem film={film}/>
    //     </div>
    //     )
    //   }
    //    </div>
    //    <Pagination
    //      defaultCurrent={1}
    //      total={5000} 
    //      onChange={(page) => setPage(page)}
    //       />
    // </Styles>
  )
}

export default MoviesList