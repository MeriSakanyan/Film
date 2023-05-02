import React, { useEffect } from 'react'
import Styles from './MoviesItemStyle'
import { Card } from 'antd';
const { Meta } = Card;

function MoviesItem(film) {
  return (
    <Styles>
    <Card
      hoverable
      cover={<img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`} alt=""/>}
    >
      <Meta title="Emily the Criminal" description="year: 2022"  />
      <Meta description="Total votes: 487" />
    </Card>
    </Styles>
  )
}

export default MoviesItem

