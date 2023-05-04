import React from 'react'
import Styles from './MoveListItemStyle'
import { Rate } from 'antd';
import { useNavigate } from 'react-router-dom';

function MoveListItem(film) {
  const navigate = useNavigate()

  return (
    <Styles>
      <div  onClick={ () => {navigate('/movie/'+film.id)}}>
      <img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`} alt=""/>
      <Rate allowHalf defaultValue={2.5} count={10}  />
      <p>{film?.title}</p>
      </div>
    </Styles>
  )
}

export default MoveListItem
