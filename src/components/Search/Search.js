import React, { useState } from 'react'
import Styles from './SearchStyle'
import SearchItem from './SearchItem/SearchItem'
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectSearch } from '../../store/slice/search/searchSlice';
import { fetchSearch } from '../../store/slice/search/searchApi';
// import { useEffect } from 'react';

function Search() {

  const dispatch = useDispatch();
  const seacrh = useSelector(selectSearch);
 
  const { t, i18n} = useTranslation()

  // console.log("id", id)
  const [value, setValue] = useState('');
 
  
  
  // useEffect(() => {
  //   // dispatch(fetchSearch({url:`${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=c90960472340983f37679878e271035a&language=${i18n.language}`}))
  // }, [i18n.language, id])

  return (
    <Styles>
      <div className='Search_list'>
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      </div>
      <Pagination
         defaultCurrent={1}
        //  current={page}
         total={5000} 
        
       />
    </Styles>
  )
}

export default Search