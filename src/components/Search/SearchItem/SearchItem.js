import React from 'react'
import Styles from './SearchItemStyle'
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Rate } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const { Meta } = Card;


function SearchItem(film) {
    const navigate = useNavigate();
  

    return (
      <Styles>
        <div  onClick={ () => {navigate('/movie/'+film.id)}}>
        <Card
          hoverable
          cover={<LazyLoadImage
                 src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`}
                 alt=''
                 effect='blur'
                  />}
        >
         <div className='card_description'>
          <Meta title={film?.title} />
          <p>{film?.overview.slice(0, 100)}</p>
         </div>
        <div className='card_rate'>
          <Rate allowHalf defaultValue={2.5} count={10}  />
        </div>
          
 
      <div className='vote_average'>{film?.vote_average}</div>
        </Card>
        </div>
      </Styles>
    )
}

export default SearchItem



