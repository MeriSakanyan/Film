import React from 'react'
import Styles from './MoveListItemStyle'
import { Rate } from 'antd';

function MoveListItem(film) {
  console.log(film)
  return (
    <Styles>
      {/* <img src = {`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${film.poster_path}`} alt=""/> */}
      <img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`} alt=""/>
  
      <Rate allowHalf defaultValue={2.5} count={10} />

      <p>{film?.original_title}</p>
    </Styles>
  )
}

export default MoveListItem

// import React from 'react'
// import Styles from './CarouselItemStyle'

// function CarouselItem(film) {
//   console.log(film);
//   return (
    
//     <Styles>
//       <img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`} alt=""/>
//       <p>{film?.originsal_title}</p>
//     </Styles>
//   )
// }

// export default CarouselItem