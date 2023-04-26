import React, { useEffect } from 'react'
import Styles from './MoviesListStyle'
import { Pagination } from 'antd';
import MoveListItem from './MoveListItem/MoveListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../../redux/slice/film';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function MoviesList() {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { i18n} = useTranslation()

  useEffect(() => {
    dispatch(fetchFilms( { language:i18n.language, page}))
    },[i18n.language, page])


  return (
    <Styles>
   
       <Pagination
         defaultCurrent={1}
         total={5000} 
         onChange={(page) => setPage(page)}
          />
       <div className='MoviesList'>

       {
        state.film?.data?.results && state.film?.data?.results.map((film,index) => 
        <div key={index}>
          <MoveListItem film={film}/>
        </div>
        )
      }
       </div>
       <Pagination
         defaultCurrent={1}
         total={5000} 
         onChange={(page) => setPage(page)}
          />
   
    </Styles>
  )
}

export default MoviesList