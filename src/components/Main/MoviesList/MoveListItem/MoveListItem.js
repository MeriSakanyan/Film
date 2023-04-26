import React from 'react'
import Styles from './MoveListItemStyle'
import { Rate } from 'antd';

function MoveListItem({film}) {
  return (
    <Styles>
      <img src = {`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${film.poster_path}`} alt=""/>
  
      <Rate allowHalf defaultValue={2.5} count={10} />

      <p>{film.title}</p>
    </Styles>
  )
}

export default MoveListItem