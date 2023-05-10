import React from 'react'
import Styles from './SearchItemStyle'
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Rate } from 'antd';
const { Meta } = Card;

function SearchItem(film) {
    const navigate = useNavigate()

    return (
      <Styles>
        <div  onClick={ () => {navigate('/movie/'+film.id)}}>
        <Card
          hoverable
        //   cover={<img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film?.poster_path}`} alt=""/>}
        cover={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SI2lPLtI3MNKWTsypbI4YyAxrD9xbqMrlvGEHL5DsW2d5aWN6_ckmLwtMuBi3vXBUjo&usqp=CAU' alt='img' />}
      >
    
          {/* <Meta title={film.title} description={film.release_date}  />
          <Meta description={film.vote_count} /> */}
         <div className='card_description'>
          <Meta title="meri" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam recusandae ipsum maxime commodi ratione consequatur min</p>
         </div>
        <div className='card_rate'>
        <Rate allowHalf defaultValue={2.5} count={10}  />
          <Meta title="meri" />
        </div>
          
 
      <div className='vote_average'>{film.vote_average}</div>
        </Card>
        </div>
      </Styles>
    )
}

export default SearchItem



