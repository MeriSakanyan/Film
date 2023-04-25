import React from 'react'
import Styles from './MoviesListStyle'
import { Pagination } from 'antd';

function MoviesList() {
  const onChange = (page) => {
    console.log(page);
  };


  return (
    <Styles>
       <Pagination defaultCurrent={1} onChange={onChange} total={50} />
    </Styles>
  )
}

export default MoviesList