import React from 'react'
import Styles from './MoveListItemStyle'
import { Rate } from 'antd';

function MoveListItem(film) {
  return (
    <Styles>
      <img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`} alt=""/>
      <Rate allowHalf defaultValue={2.5} count={10} />
      <p>{film?.title}</p>
    </Styles>
  )
}

export default MoveListItem
