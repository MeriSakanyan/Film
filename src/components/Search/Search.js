import React, { useEffect, useState } from 'react'
import Styles from './SearchStyle'
import SearchItem from './SearchItem/SearchItem'
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectSearch } from '../../store/slice/search/searchSlice';
import { fetchSearch } from '../../store/slice/search/searchApi';
import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

function Search() {
  const { searchText } = useParams() 
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const { t, i18n} = useTranslation()

  
  useEffect(() => {
    
    dispatch(fetchSearch({url:`${process.env.REACT_APP_BASE_URL}/search/movie?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&query=${searchText}&page=1&include_adult=false`}))
  }, [i18n.language, searchText])
  
  console.log(search)
  
  return (
    <Styles>
       <div className='Search_list'>
        {
          search.data.results && search.data.results.map((film) => 
          <div key={film.id} >
            <SearchItem {...film} />
          </div>
          )
        }
        {
          !search.data.results  && 
          <h1>Chka</h1>
        }
      </div>
      {/* <Pagination
         defaultCurrent={1}
         total={5000} 
       /> */}
    </Styles>
  )
}

export default Search