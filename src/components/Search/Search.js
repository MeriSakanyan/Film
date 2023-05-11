import React, { useEffect, useState } from 'react'
import Styles from './SearchStyle'
import SearchItem from './SearchItem/SearchItem'
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectSearch } from '../../store/slice/search/searchSlice';
import { fetchSearch } from '../../store/slice/search/searchApi';
import { useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';


function Search() {
  const { searchText } = useParams() 
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const { i18n} = useTranslation()
  const [page, setPage] = useState(1)

  
  useEffect(() => {
    
    dispatch(fetchSearch({url:`${process.env.REACT_APP_BASE_URL}/search/movie?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&query=${searchText}&page=${page}`}))
  }, [i18n.language, searchText, page])
  
  console.log(search);
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
          !search.data.results?.length  && !search.isLoading &&
          <ErrorPage />
        }
      
      </div>
      <Pagination
         defaultCurrent={1}
         total={100} 
         onChange={(page) => setPage(page)}
       />
    </Styles>
  )
}

export default Search